import React from 'react';
import { Container } from '@material-ui/core';
import Member from '../components/Member';
import members from '../data/members';

export default function Members() {
  return (
    <Container maxWidth="md">
      {Object.entries(members).map(([key, mem]) => (
        <Member key={key} {...mem}></Member>
      ))}
    </Container>
  );
}
