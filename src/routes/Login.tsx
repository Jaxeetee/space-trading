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
  const [newCallsign, setNewCallsign] = useState<string>('');
  const [newFaction, setNewFaction] = useState<string>('');
  const navigate = useNavigate();

  function navigateToDashboard()
  {
    navigate('/dashboard')
  }

  const submit = async () =>  {
    const result = await getAgent(tokenInput);

    if (result === undefined)
    {
      setValidityPrompt('Invalid Token!')
    } 
    else 
    {
      localStorage.setItem(TOKEN, tokenInput);
      navigateToDashboard();
    }     
  }

  const getNewToken = async () =>  {
    console.log("getNewToken called");
    const result = await generateToken(newCallsign, newFaction as FactionSymbols);

    if (result === undefined)
    {
      setValidityPrompt('Callsign already exists!');
      //TODO: specify the error of the input (i.e. if callsign already exists or, character exceeds limit or has invalid characters)
    }
    else 
    {
      localStorage.setItem(TOKEN, result)
      navigateToDashboard();
    }
  }

  const switchToNewAccount = (state: boolean) =>  {
    setNewAccount(state);
    setValidityPrompt('');
  }

  const onUpdateTokenInput = (e: any) =>  {
    setTokenInput(e.target.value);
  }

  const onUpdateFaction = (chosenFaction: string) =>  {
    setNewFaction(chosenFaction);
  }

  const onUpdateCallsignInput = (callsignInput: string) =>  {
    setNewCallsign(callsignInput);
  }

  return (
    <div className='w-screen h-screen p-4 flex flex-col text-center items-center space-y-32 bg-stone-950 text-offwhite'>
      <h1 className='text-3xl font-semibold '>Galaxy Trading</h1>
      
        {newAccount ? 
          <NewAccountCard 
            onUpdateCallsignInput={onUpdateCallsignInput}
            onUpdateFaction={onUpdateFaction}
            cancel={switchToNewAccount} 
            getNewToken={getNewToken}
            validityPrompt={validityPrompt}
          />
        :
          <LoginCard 
            onUpdateTokenInput={onUpdateTokenInput} 
            validityPrompt={validityPrompt} 
            submit={submit} 
            setNewAccount={switchToNewAccount}
          />
        }
        
    </div>
  )
}

export default Login