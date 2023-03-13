import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { GlobalProvider } from './Components/Global';
import LuckyNumbers from './Components/LuckyNumbers';
import Nav from './Components/Nav';
import Routes from './Components/Routes';

function App() {
  return (
    <GlobalProvider>
      <Nav />
      <Routes />
      <LuckyNumbers />
    </GlobalProvider>
  );
}

export default App;