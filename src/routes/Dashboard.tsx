import { useEffect, useState } from 'react';

import { getAgent } from '../spacetraders-api/my/agent';
import { AccountData } from '../spacetraders-api/my/types';
import { MY_TOKEN } from '../spacetraders-api/my/types';

function Dashboard() {
  const [agentDetails, setAgentDetails] = useState<AccountData | undefined>(undefined);

  useEffect(() => {

    const fetchData = async () =>  {
      const result = await getAgent(MY_TOKEN); 
      setAgentDetails(result);
    };
    
    fetchData();   
  }, [])
  return (
    <div className='w-screen h-screen bg-slate-500'>
      <main>
        <div className='w-full items-center'>
          {agentDetails ? 
            <div className='text-center'>{agentDetails.symbol} {agentDetails.startingFaction}</div> 
            : <div> has no data</div>}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
