import TotalAmounts from './Components/TotalAmounts'
import Receivables from './Components/Receivables'
import History from './Components/History'
import './App.css'
import { GlobalStateProvider } from './Components/Context/GlobalState';

function App() {
  return (
    <div className="container">
      <h1 className=" orange darken-3 white-text text-darken-3 card title center">Load Tracker</h1>
      <div className="content center app z-depth-2">
        <GlobalStateProvider>
        {/* Total Amounts */}
          <TotalAmounts />
        {/* Receivables */} 
            <Receivables />
        {/* History */}
          <History />
        </GlobalStateProvider>
      </div>
    </div>
  );
}

export default App;
