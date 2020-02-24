import React from 'react';
import { Avatar, Card, CardHeader, CardContent, CardActions, Chip, Link, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

function MemCard(props) {
  return (
    <React.Fragment>
      <Card elevation={8} component={Paper}>
        <CardHeader title={props.name} avatar={<Avatar src={props.avatar} />} />
        <CardContent>
          <Typography>{props.describe}</Typography>
          <List>
            {props.links.map((link) => (
              <ListItem button component={Link} href={link.link} target="_blank">
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          {props.tags.map((tag) => <Chip label={tag.name} color={tag.color} onClick={() => {}} />)}
        </CardActions>
      </Card>
      <hr />
    </React.Fragment>
  );
}

export default MemCard;
