import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import RegistrationForm from './RegistrationForm';
import CopyCard from './CopyCard';
import { useState } from 'react';
import { generateToken } from '@/spacetraders-api/my/register';
import { FactionSymbols } from '@/interface/faction';
import { TOKEN } from '@/lib/constants';

const NewAccountCard = (props: any) => {
  const [ copyCardState , setCopyCardState ] = useState<boolean>(false);

  const onContentChange = (state: boolean) =>  {

    setCopyCardState(state);
  }

  const onChangeToCopyCard = () =>  {
    setCopyCardState(true);
  }

  const cancel = () =>  {
    props.cancel(false);
  }

  const getNewToken = (newAgent: {symbol: string, faction: FactionSymbols}) =>  {

    generateToken(newAgent.symbol, newAgent.faction)
      .then(data =>  {
        localStorage.setItem(TOKEN, data as string)
        //navigateToDashboard();
      })
  }


  return (
    <Card className='min-h-fit min-w-96'>
      <CardHeader className='my-4'>
        <CardTitle className='text-left pt-4 text-2xl'>
          {
            copyCardState ? 
              'Your Token'
            :
              'New Account'
          }
        </CardTitle>
      </CardHeader>
      <CardContent className='m-4'>
      <CopyCard 
        navigateToDashboard = {props.navigateToDashboard}
      />
        {/* {
          copyCardState ? 
          <CopyCard />
          :
          <RegistrationForm 
            onSubmit={props.onSubmit}
            onCancel={cancel}
            onContentChange={onChangeToCopyCard}
        />
        } */}
      </CardContent>
    </Card>
  )
}

export default NewAccountCard