import './App.css';
import { AddTransaction, BalanceCard, History, SummaryCard } from './components';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h1 className='header'>Expense Tracker</h1>
        <div className='content-container'>
          <div className='info-container'>
            <BalanceCard />
            <SummaryCard />
            <History />
          </div>
          <div className='input-container'>
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
