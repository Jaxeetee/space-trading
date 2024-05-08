import React, { useEffect, useState } from 'react';

import './App.css';
import { getDetails } from './spacetraders-api/spaceTrader';
import { AccountData } from './interface/types';

function App() {
  const [agentDetails, setAgentDetails] = useState<AccountData | undefined>(undefined);

  useEffect(() => {

    const fetchData = async () => {
      const result = await getDetails();
      setAgentDetails(result);
    };
    
    fetchData();   
  }, [])
  return (
    <div className="App">
      <main>
        <div>
          {agentDetails ? 
            <div> {agentDetails.symbol} {agentDetails.startingFaction}</div> 
            : <div> has no data</div>}
        </div>
      </main>
    </div>
  );
}

export default App;
