import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const Login = () => {
  const [tokenInput, setTokenInput] = useState<string>();


  const submit = (e: any) => {
    console.log(e);
  }

  const getNewToken = () => {

  }

  const onUpdateInput = (e: any) => {
    setTokenInput(e.target.value);
  }

  return (
    <div className='flex bg-slate-900 text-stone-50 w-screen h-screen text-center items-center justify-center space-x-10'>
      <Card className='max-w-60 min-h-60'>
        <CardHeader>
          <CardTitle>Login using your token</CardTitle>
        </CardHeader>
        <CardContent className='m-5'>
          <Input placeholder='insert token here' className='rounded-[5px]' onChange={onUpdateInput} />
          <Button className='m-4 bg-slate-950 rounded-xl' type="submit" onClick={submit}>Login</Button>
        </CardContent>
      </Card>
      <Card className='max-w-60 min-h-60'>
        <CardHeader>
          <CardTitle>Create new Token</CardTitle>
        </CardHeader>
        <CardContent className='m-5'>
          <Button className='m-4 bg-slate-950 rounded-xl' type="submit" onClick={getNewToken}>Generate new token</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login