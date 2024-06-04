import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { TOKEN } from '@/lib/constants';
import { getAgent } from '@/spacetraders-api/my/agent';
import { generateToken } from '@/spacetraders-api/my/register';


const LoginCard = (props: any) => {
  const newAccount = () =>  {
    props.setNewAccount(true);
  }

  return (
    <Card className='relative size-96'>
      <CardHeader className='my-4'>
      <CardTitle className='text-left mt-4 text-2xl'>Sign In</CardTitle>
      </CardHeader>
      <CardContent className=' m-4'>
        <p className='ml-1 text-red-500 text-left text-[.75rem]'>{props.validityPrompt}</p>
        <Input placeholder='Enter your Token' onChange={props.onUpdateTokenInput}  className='rounded-[5px] my-1' />
        <p className='ml-1 text-left font-light text-[.75rem]'> Dont have one?
          <a onClick={newAccount} className='hover:text-amber-100 text-[.75rem] hover:cursor-pointer font-mono'> Create a new account</a>
        </p>
      </CardContent>
      <CardFooter className='absolute bottom-6 w-full'>
        <Button className='flex w-full hover:bg-amber-100 hover:ring-2 hover:ring-black hover:ring-inset bg-offwhite text-black rounded-[5px]' type="submit" onClick={props.submit}>Sign in</Button>
      </CardFooter>
    </Card>
  )
}

const NewAccountCard = (props: any) => {
  const cancel = () =>  {
    props.cancel(false);
  }
  return (
    <Card className='relative size-96'>
      <CardHeader className='my-4 justify-'>
        <CardTitle className='text-left pt-4 text-2xl'>New Account</CardTitle>
      </CardHeader>
      <CardContent className='m-4'>
        <p className='ml-1 text-red-500 text-left text-[.75rem]'>{props.validityPrompt}</p>
        <Input placeholder='Enter a new Callsign' onChange={props.onUpdateCallsignInput}  className='rounded-[5px]' />
      </CardContent>
      <CardFooter className='absolute w-full bottom-6'>
        <Button type="submit" onClick={cancel}  className='flex w-full hover:bg-offwhite bg-neutral-950 hover:text-black text-offwhite rounded-[5px]' >Cancel</Button>
        <Button type="submit" onClick={props.getNewToken} className='flex w-full hover:bg-amber-100 hover:ring-2 hover:ring-neutral-950 hover:ring-inset bg-offwhite text-black rounded-[5px]' >Create</Button>
      </CardFooter>
    </Card>
  )
}

const Login = () => {
  const [tokenInput, setTokenInput] = useState<string>("");
  const [newCallsign, setNewCallsign] = useState<string>("");
  const [validityPrompt, setValidityPrompt] = useState<string>("");
  const [newAccount, setNewAccount] = useState<boolean>(false);
  const navigate = useNavigate();

  function navigateToDashboard()
  {
    navigate('/dashboard')
  }

  const submit = async () =>  {
    const result = await getAgent(tokenInput);

    if (result === undefined)
    {
      setValidityPrompt("Invalid Token!")
    } 
    else 
    {
      localStorage.setItem(TOKEN, tokenInput);
      navigateToDashboard();
    }     
  }

  const getNewToken = async () =>  {
    const result = await generateToken(newCallsign);

    if (result === undefined)
    {
      setValidityPrompt("Callsign already exists!");
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
    setValidityPrompt("");
  }

  const onUpdateTokenInput = (e: any) =>  {
    setTokenInput(e.target.value);
  }

  const onUpdateCallsignInput = (e: any) =>  {
    setNewCallsign(e.target.value);
  }

  return (
    <div className='w-screen h-screen p-4 flex flex-col text-center items-center space-y-32 bg-stone-950 text-offwhite'>
      <h1 className='text-3xl font-semibold '>Galaxy Trading</h1>
      
        {newAccount ? 
          <NewAccountCard 
            onUpdateCallsignInput={onUpdateCallsignInput}
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