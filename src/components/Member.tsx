import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
  Link,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import type { MemberData } from '../data/type';

export default function Member(props: MemberData) {
  return (
    <>
      <Card elevation={8} component={Paper}>
        <CardHeader title={props.name} avatar={<Avatar src={props.avatar} />} />
        <CardContent>
          <Typography>{props.desc}</Typography>
          {props.links && (
            <List>
              {Object.entries(props.links).map(([key, link]) => (
                <ListItem
                  button
                  component={Link}
                  href={link.url}
                  target="_blank"
                  key={key}
                >
                  <ListItemIcon>
                    {link.icon && React.createElement(link.icon)}
                  </ListItemIcon>
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
        {props.tags && (
          <CardActions>
            {Object.entries(props.tags).map(([key, tag]) => (
              <Chip label={tag.name} color={tag.color} onClick={() => {}} />
            ))}
          </CardActions>
        )}
      </Card>
      <hr />
    </>
  );
}
