import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'Lære Norsk Appen',
    description: 'Mini app for learning Norwegian using OpenAI API.',
    link: 'https://learnnorsk.vercel.app/',
  },
  {
    id: 1,
    title: 'Yellow Shop',
    description: 'Online store, developed by me in 2021.',
    link: 'https://yellowshop.in.ua/',
  },
  {
    id: 2,
    title: 'KeyboardVisual',
    description: 'Just4fun',
    link: 'https://typing-simulator-livid.vercel.app/',
  },
];

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

function ProjectsList() {
  return (
    <ListContainer>
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </ListContainer>
  );
}

export default ProjectsList;