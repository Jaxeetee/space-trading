import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getDetails } from './api/spaceTrader';
import { AccountData } from './interface/account-data';

function App() {
  const [agent, setAgent] = useState<AccountData | undefined>(undefined);

  useEffect(() => {

    const fetchData = async () => {
      const result = await getDetails();
      setAgent(result);
    };
    
    fetchData();   
  }, [])
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
      </header>

      <main>
        <div>
          {agent ? <div> {agent.symbol}</div> : <div> has no data</div>}
        </div>
      </main>
    </div>
  );
}

export default App;
