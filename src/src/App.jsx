import React from 'react';
import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';

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