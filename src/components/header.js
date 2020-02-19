import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinkIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink, Route } from 'react-router-dom';
import Data from '../data/glob'

const useStyles = makeStyles(theme => ({
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

function LinkItem(props) {
  const { icon, primary, to, onClick } = props;
  return (
    <ListItem button component={RouterLink} to={to} onClick={onClick}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary}></ListItemText>
    </ListItem>
  );
}
LinkItem.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer} className={classes.menuButton}><MenuIcon/></IconButton>
          <Typography variant="h6" className={classes.title}>
            <Route path='/' exact></Route>
            <Route path='/projects' exact>Projects - </Route>
            <Route path='/members' exact>Members - </Route>
            <Route path='/friends' exact>Friends - </Route>
            <Route path='/About' exact>About - </Route>
            {Data.site_name}
          </Typography>
          {Data.repo_url ? <IconButton color="inherit" component={Link} href={Data.repo_url} target="_blank" rel="noreferrer"><GitHubIcon/></IconButton> : null}
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Drawer open={state} onClose={toggleDrawer}>
          <List>
            <LinkItem icon={<HomeIcon/>} primary="Home" to="/" onClick={toggleDrawer} />
            <LinkItem icon={<CodeIcon/>} primary="Projects" to="/projects" onClick={toggleDrawer} />
            <LinkItem icon={<GroupIcon/>} primary="Members" to="/members" onClick={toggleDrawer} />
            <LinkItem icon={<LinkIcon/>} primary="Friends" to="/friends" onClick={toggleDrawer} />
            <LinkItem icon={<InfoIcon/>} primary="About" to="/about" onClick={toggleDrawer} />
          </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Header;
