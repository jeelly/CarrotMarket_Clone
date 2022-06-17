import styled from 'styled-components';
//Sub
import Router from './page/Router';
import GlobalStyles from './css/GlobalStyles'
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
      <Container>
        <Header />
        <Routerwrap>
          <Router />
        </Routerwrap>
        <Footer />
        <GlobalStyles />
      </Container>
  );
}

export default App;

const Container = styled.div`
`;
const Routerwrap = styled.div`
  padding-top:50px;
`