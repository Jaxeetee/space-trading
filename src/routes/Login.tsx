import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import LoginCard from '@/components/login/LoginCard';
import NewAccountCard from '@/components/login/NewAccountCard';
import { TOKEN } from '@/lib/constants';
import { getAgent } from '@/spacetraders-api/my/agent';
import { generateToken } from '@/spacetraders-api/my/register';
import { FactionSymbols } from '@/interface/faction';


const Login = () => {
  const [tokenInput, setTokenInput] = useState<string>('');
  const [validityPrompt, setValidityPrompt] = useState<string>('');
  const [newAccount, setNewAccount] = useState<boolean>(false);
  const navigate = useNavigate();

  const navigateToDashboard = () =>  {
    navigate('/dashboard')
  }

  const switchToNewAccount = (state: boolean) =>  {
    setNewAccount(state);
    setValidityPrompt('');
  }

  const onUpdateTokenInput = (e: any) =>  {
    setTokenInput(e.target.value);
  }

  return (
    <div className='w-screen h-screen p-4 flex flex-col text-center items-center space-y-32 bg-stone-950 text-offwhite'>
      <h1 className='text-3xl font-semibold '>Galaxy Trading</h1>
        {newAccount ? 
          <NewAccountCard 
            cancel={switchToNewAccount} 
            navigateToDashboard={navigateToDashboard}
          />
        :
          <LoginCard 
            onUpdateTokenInput={onUpdateTokenInput} 
            validityPrompt={validityPrompt} 
            navigateToDashboard={navigateToDashboard}
            setNewAccount={switchToNewAccount}
          />
        }
        
    </div>
  )
}

export default Login