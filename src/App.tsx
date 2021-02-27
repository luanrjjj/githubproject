
import GlobalStyle from './styles/global';
import UserSearch from './pages/UserSearch/'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    
    <GlobalStyle/>

    
  </>
  );
}

export default App;
