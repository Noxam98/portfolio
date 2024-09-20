import React from 'react';
import GlobalStyle from './GlobalStyles';
import Header from '../../portfolio/src copy/components/Header';
import ProjectsList from '../../portfolio/src copy/components/ProjectsList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProjectsList />
    </>
  );
}

export default App;