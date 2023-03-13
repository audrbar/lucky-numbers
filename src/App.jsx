import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { GlobalProvider } from './Components/Global';
import LuckyNumbers from './Components/LuckyNumbers';

function App() {
  return (
    <GlobalProvider>
      <LuckyNumbers />
    </GlobalProvider>
  );
}

export default App;