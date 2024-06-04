import AgentInfo from '@/components/dashboard/AgentInfo';
import { TOKEN } from '@/lib/constants';
import { getMyContracts } from '@/spacetraders-api/my/contracts';

import { Card } from '@/components/ui/card';
import Contracts from '@/components/dashboard/Contracts';


const Dashboard = () =>  {

  const pToken = localStorage.getItem(TOKEN);

  const myContracts = async () =>  {
    const result = await getMyContracts(pToken);

  }
  return (
    <>
      <main className='w-screen h-screen p-4 bg-stone-950 text-offwhite'>
        <AgentInfo />
        <Contracts />
      </main>
    </>
  );
}

export default Dashboard;
