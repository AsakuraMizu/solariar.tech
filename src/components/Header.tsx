import React, { useState } from 'react';
import {
  AppBar,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink, Route } from 'react-router-dom';
import glob from '../data/glob';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface LinkItemProps {
  icon: React.ElementType;
  primary: string;
  to: string;
  onClick: React.MouseEventHandler;
}

function LinkItem({ icon, primary, to, ...rest }: LinkItemProps) {
  return (
    <ListItem button component={RouterLink} to={to} {...rest}>
      {icon && <ListItemIcon>{React.createElement(icon)}</ListItemIcon>}
      <ListItemText primary={primary}></ListItemText>
    </ListItem>
  );
}

export default function Header() {
  const cn = useStyles();
  const [state, setState] = useState(false);
  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            className={cn.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={cn.title}>
            <Route path="/" exact>
              {glob.site_name}
            </Route>
            <Route path="/projects" exact>
              Projects
            </Route>
            <Route path="/members" exact>
              Members
            </Route>
          </Typography>
          {glob.repo_url ? (
            <IconButton
              color="inherit"
              component={Link}
              href={glob.repo_url}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Drawer open={state} onClose={toggleDrawer}>
        <List>
          <LinkItem
            icon={HomeIcon}
            primary="Home"
            to="/"
            onClick={toggleDrawer}
          />
          <LinkItem
            icon={CodeIcon}
            primary="Projects"
            to="/projects"
            onClick={toggleDrawer}
          />
          <LinkItem
            icon={GroupIcon}
            primary="Members"
            to="/members"
            onClick={toggleDrawer}
          />
        </List>
      </Drawer>
    </>
  );
}
