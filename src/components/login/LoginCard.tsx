
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { getAgent } from "@/spacetraders-api/my/agent";
import { TOKEN } from "@/lib/constants";

import { AccountData } from "@/interface/account";
import { isAccountDataType } from "@/utils/typeChecker";

const LoginCard = (props: any) =>  {
  const [validityPrompt, setValidityPrompt] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');

  const newAccount = () =>  {
    props.setNewAccount(true);
  }

  const onUpdateTokenInput = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setTokenInput(e.target.value)
  }

  const onSubmit = () =>  {
    getAgent(tokenInput)
      .then(data =>  
      {
        if (isAccountDataType(data))
        {
          console.log(isAccountDataType(data));
          localStorage.setItem(TOKEN, tokenInput);
          props.navigateToDashboard();
        }
        else
        {
          setValidityPrompt(data.message);
        }
      })   
  }

  return (
    <Card className='relative size-96'>
      <CardHeader className='my-4'>
      <CardTitle className='text-left mt-4 text-2xl'>Sign In</CardTitle>
      </CardHeader>
      <CardContent className=' m-4'>
        <p className='ml-1 text-red-500 text-left text-[.75rem]'>{validityPrompt}</p>
        <Input placeholder='Enter your Token' onChange={onUpdateTokenInput}  className='rounded-[5px] my-1' />
        <p className='ml-1 text-left font-light text-[.75rem]'> Dont have one?
          <a onClick={newAccount} className='hover:text-amber-100 text-[.75rem] hover:cursor-pointer font-mono'> Create a new account</a>
        </p>
      </CardContent>
      <CardFooter className='absolute bottom-6 w-full'>
        <Button type="submit" onClick={onSubmit}  className='flex w-full hover:bg-amber-100 hover:ring-2 hover:ring-black hover:ring-inset bg-offwhite text-black rounded-[5px]' >Sign in</Button>
      </CardFooter>
    </Card>
  )
}

export default LoginCard