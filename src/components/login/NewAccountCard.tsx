import React from 'react'
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import FactionList from '@/components/login/FactionList';
import RegistrationForm from './RegistrationForm';

const NewAccountCard = (props: any) => {
  const cancel = () =>  {
    props.cancel(false);
  }


  return (
    <Card className='min-h-fit min-w-96'>
      <CardHeader className='my-4'>
        <CardTitle className='text-left pt-4 text-2xl'>New Account</CardTitle>
      </CardHeader>
      <CardContent className='m-4'>
        <RegistrationForm 
          onUpdateCallsignInput={props.onUpdateCallsignInput}
          onUpdateFactionSelect={props.onUpdateFaction}
          onSubmit={props.getNewToken}
          onCancel={cancel}
        />
      </CardContent>
    </Card>
  )
}

export default NewAccountCard