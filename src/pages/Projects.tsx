import React from 'react';
import { Container } from '@material-ui/core';
import Project from '../components/Project';
import projects from '../data/projects';

export default function Projects() {
  return (
    <Container maxWidth="md">
      {Object.entries(projects).map(([key, pro]) => (
        <Project key={key} {...pro}></Project>
      ))}
    </Container>
  );
}
