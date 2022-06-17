import styled from 'styled-components';
//Sub
import Router from './page/Router';
import GlobalStyles from './css/GlobalStyles'
import Header from './components/Header';
function App() {
  return (
      <Container>
        <Header />
        <Router />
        <GlobalStyles />
      </Container>
  );
}

export default App;

const Container = styled.div``;