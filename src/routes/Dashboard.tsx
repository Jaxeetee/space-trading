import { useEffect, useState } from 'react';

import { AccountData } from '../interface/types';
import { getMyDetails } from '../spacetraders-api/my/account-details';

function Dashboard() {
  const [agentDetails, setAgentDetails] = useState<AccountData | undefined>(undefined);

  useEffect(() => {

    const fetchData = async () => {
      const result = await getMyDetails();
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
