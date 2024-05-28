import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { generateToken } from '@/spacetraders-api/my/register'
import { TOKEN } from '@/lib/constants';
import { getAgent } from '@/spacetraders-api/my/agent';

const Login = () => {
  const [tokenInput, setTokenInput] = useState<string>("");
  const [newCallsign, setNewCallsign] = useState<string>("");
  const [tokenValid, setTokenValid] = useState<string>("");
  const navigate = useNavigate();

  function navigateToDashboard()
  {
    navigate('/dashboard')
  }

  const submit = async () =>  {
    const agent = await getAgent(tokenInput);

    if (agent === undefined)
    {
      //error prompt
      console.log("error")
      setTokenValid("")
    } else {
      localStorage.setItem(TOKEN, tokenInput);
      navigateToDashboard();
    }     
  }

  const getNewToken = () =>  {
    generateToken(newCallsign)
      .then(res =>  
        {
          localStorage.setItem(TOKEN, res)
          navigateToDashboard();
        });
  }

  const onUpdateTokenInput = (e: any) =>  {
    setTokenInput(e.target.value);
  }

  const onUpdateCallsignInput = (e: any) =>  {
    setNewCallsign(e.target.value);
  }

  return (
    <div className='flex bg-slate-900 text-stone-50 w-screen h-screen text-center items-center justify-center space-x-10'>
      <Card className='max-w-60 min-h-60'>
        <CardHeader>
          <CardTitle>Login using your token</CardTitle>
        </CardHeader>
        <CardContent className='m-5'>
          <Input placeholder='insert token here' className='rounded-[5px]' onChange={onUpdateTokenInput} />
          <Button className='m-4 bg-slate-950 rounded-xl' type="submit" onClick={submit}>Login</Button>
        </CardContent>
      </Card>
      <Card className='max-w-60 min-h-60'>
        <CardHeader>
          <CardTitle>Create new Token</CardTitle>
        </CardHeader>
        <CardContent className='m-5'>
          <Input placeholder='insert new Callsign' className='rounded-[5px]' onChange={onUpdateCallsignInput} />
          <Button className='m-4 bg-slate-950 rounded-xl' type="submit" onClick={getNewToken}>Generate new token</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login