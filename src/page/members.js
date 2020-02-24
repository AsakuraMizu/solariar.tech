import React from 'react';
import { Container } from '@material-ui/core';
import MemCard from '../components/memcard';
import Data from '../data/members';

function Members() {
  return (
    <Container maxWidth="md">
      {Data.map((mem) => <MemCard {...mem}></MemCard>)}
    </Container>
  );
}

export default Members;
