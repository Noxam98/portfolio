import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
`;

function Project({ title, description, link }) {
  return (
    <ProjectCard>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLink href={link}>Check it</ProjectLink>
    </ProjectCard>
  );
}

export default Project;