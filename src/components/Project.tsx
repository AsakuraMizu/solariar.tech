import React from 'react';
import {
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Link,
  Typography,
} from '@material-ui/core';

import type { ProjectData } from '../data/type';

interface NLinkProps {
  href?: string;
  text?: string;
}

function NLink({ href, text }: NLinkProps) {
  return (
    <>
      <br />
      <Link href={href} rel="noreferrer" target="_blank">
        {text}
      </Link>
    </>
  );
}

export default function ProCard(props: ProjectData) {
  return (
    <>
      <Card elevation={8} component={Paper}>
        <CardHeader
          title={
            <>
              {props.name}{' '}
              {props.coop && <Chip label="co-work" color="primary" />}
            </>
          }
          action={props.star && <img src={props.star} alt="star" />}
        />
        {props.img && <CardMedia image={props.img} component="img" />}
        <CardContent>
          <Typography>{props.desc}</Typography>
          {props.devs && (
            <Typography>
              <b>Developers: </b>
              {Object.entries(props.devs).map(([key, dev]) => (
                <NLink key={key} href={dev.url} text={dev.name} />
              ))}
            </Typography>
          )}
          {props.teams && (
            <Typography>
              <b>Teams: </b>
              {Object.entries(props.teams).map(([key, team]) => (
                <NLink key={key} href={team.url} text={team.name} />
              ))}
            </Typography>
          )}
        </CardContent>
        {props.url && (
          <CardActions>
            <Typography>
              <Link href={props.url} rel="noreferrer" target="_blank">
                More
              </Link>
            </Typography>
          </CardActions>
        )}
      </Card>
      <hr />
    </>
  );
}
