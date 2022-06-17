//Router
import { BrowserRouter } from 'react-router-dom';
//Sub
import Router from './page/Router';
import GlobalStyles from './css/GlobalStyles'

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
