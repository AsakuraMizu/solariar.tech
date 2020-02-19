import React from 'react';
import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Link } from '@material-ui/core';

function ProCard(props) {
  return (
    <Paper elevation={8}>
      <Card>
        <CardHeader title={props.name} action={<img src={props.star} alt="star"></img>} />
        <CardMedia image={props.img} component="img" />
        <CardContent>
          {props.content}
        </CardContent>
        <CardActions>
          <Typography>
            <Link href={props.href} rel="noreferrer">
              View More
            </Link>
          </Typography>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default ProCard;
