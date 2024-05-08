import React, { useEffect, useState } from 'react';

import { getDetails } from '../spacetraders-api/spaceTrader';
import { AccountData } from '../interface/interfaces';

function Dashboard() {
  const [agentDetails, setAgentDetails] = useState<AccountData | undefined>(undefined);

  useEffect(() => {

    const fetchData = async () => {
      const result = await getDetails();
      setAgentDetails(result);
    };
    
    fetchData();   
  }, [])
  return (
    <div>
      <main>
        <div className='w-full items-center'>
          {agentDetails ? 
            <div className='text-center'> {agentDetails.symbol} {agentDetails.startingFaction}</div> 
            : <div> has no data</div>}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
