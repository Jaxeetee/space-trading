import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const Login = () => {
  const [tokenInput, setTokenInput] = useState<string>();


  const onClicked = (e: any) => {
    console.log(e);
  }

  const onUpdateInput = (e: any) => {
    setTokenInput(e.target.value);
  }

  return (
    <div className='bg-slate-900 w-screen h-screen text-center text-stone-50 content-center'>
      <Card className='max-w-60 mx-auto'>
        <CardHeader>
          <CardTitle>Login using your token</CardTitle>
        </CardHeader>
        <CardContent className='m-5'>
          <Input placeholder='insert token here' className='rounded-[5px]' onChange={onUpdateInput} />
          <Button className='bg-slate-950 rounded-xl' type="submit" onClick={onClicked}>Login</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login