import GlobalStyle from './GlobalStyles';
import Header from './src/components/Header';
import ProjectsList from './src/components/ProjectsList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <ProjectsList />
    </>
  );
}

export default App;