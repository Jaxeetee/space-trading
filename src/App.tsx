import React, { useEffect, useState } from 'react';
import './App.css';

import { AccountData } from './interface/types';
import { MY_TOKEN } from './spacetraders-api/my/types';
import { getDetails } from './spacetraders-api/my/account-details';

function App() {
  const [agentDetails, setAgentDetails] = useState<AccountData | undefined>(undefined);

  useEffect(() => {

    const fetchData = async () => {
      const result = await getDetails(MY_TOKEN);
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
