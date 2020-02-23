import React from 'react';
import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Link } from '@material-ui/core';

function ProCard(props) {
  return (
    <Paper elevation={8}>
      <Card>
        <CardHeader title={props.name} action={props.star ? <img src={props.star} alt="star"></img> : null} />
        {props.img ? <CardMedia image={props.img} component="img" /> : null}
        <CardContent>
          {props.content}
          {props.developer ? <p><b>Developed By</b>: {props.developer}</p> : null}
        </CardContent>
        {props.href ? 
          <CardActions>
            <Typography>
              <Link href={props.href} rel="noreferrer">
                View More
              </Link>
            </Typography>
          </CardActions>
        : null}
      </Card>
    </Paper>
  );
}

export default ProCard;
