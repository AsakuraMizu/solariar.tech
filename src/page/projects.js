import React from 'react';
import { Container } from '@material-ui/core';
import ProCard from '../components/procard';
import Data from '../data/projects';

function Projects() {
  return (
    <Container maxWidth="md">
      {Data.map((pro) => <ProCard {...pro}></ProCard>)}
    </Container>
  );
}

export default Projects;
