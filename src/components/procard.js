import React from 'react';
import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions, Link, Typography } from '@material-ui/core';

function NLink(props) {
  return (
    <Link href={props.href ? props.href : null} rel="noreferrer" target="_blank">{props.text}</Link>
  );
}

function NLinkX(props) {
  return (
    <React.Fragment>
      <NLink href={props.href} text={props.text}></NLink>
      &nbsp;&amp;&nbsp;
    </React.Fragment>
  )
}

function ProCard(props) {
  return (
    <React.Fragment>
      <Card elevation={8} component={Paper}>
        <CardHeader title={props.name} action={props.star ? <img src={props.star} alt="star"></img> : null} />
        {props.img ? <CardMedia image={props.img} component="img" /> : null}
        <CardContent>
          <Typography>{props.content}</Typography>
          {props.developers ? (
            <Typography>
              <b>Developers: </b>
              {props.developers.slice(0, -1).map((dev) => <NLinkX key={dev.key} href={dev.link} text={dev.name} />)}
              {props.developers.slice(-1).map((dev) => <NLink key={dev.key} href={dev.link} text={dev.name} />)}
            </Typography>
          ) : null}
          {props.groups ? (
            <Typography>
              <b>Groups: </b>
              {props.groups.slice(0, -1).map((gr) => <NLinkX key={gr.key} href={gr.link} text={gr.name} />)}
              {props.groups.slice(-1).map((gr) => <NLink key={gr.key} href={gr.link} text={gr.name} />)}
            </Typography>
          ) : null}
        </CardContent>
        {props.link ? 
          <CardActions>
            <Typography>
              <NLink href={props.link} text="View More" />
            </Typography>
          </CardActions>
        : null}
      </Card>
      <hr />
    </React.Fragment>
  );
}

export default ProCard;
