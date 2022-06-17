import './css/App.css';

//Router
import { BrowserRouter } from 'react-router-dom';
//Sub
import Router from './page/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
