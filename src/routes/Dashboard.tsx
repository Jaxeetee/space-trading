import { useEffect, useState } from 'react';

import { getAgent } from '../spacetraders-api/my/agent';
import { AccountData } from '../spacetraders-api/my/types';
import { TOKEN } from '@/lib/constants';

function Dashboard() {
  const [agentDetails, setAgentDetails] = useState<AccountData | undefined>();
  const accountToken = localStorage.getItem(TOKEN)?.toString();

  useEffect(() => {
    const fetchData = async () =>  {
      const response = await getAgent(accountToken); 
      setAgentDetails(response);
    };
    
    fetchData();   
  }, [])
  return (
    <div className='w-screen h-screen bg-'>
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
