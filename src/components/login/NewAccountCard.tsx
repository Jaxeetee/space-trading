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
  const [ newToken, setNewToken ] = useState<string>(''); 
  const [ validityPrompt, setValidityPrompt] = useState<string>('');

  const cancel = () =>  {
    props.cancel(false);
  }

  const getNewToken = (newAgent: {symbol: string, faction: FactionSymbols}) =>  {
    generateToken(newAgent.symbol, newAgent.faction)
      .then(data =>  {
        if (typeof data === 'string')
        {
          localStorage.setItem(TOKEN, data as string);
          setNewToken(data as string);
          setCopyCardState(true);
        }
        else 
        {
          console.log(data.message);
          setValidityPrompt(data.message);
        }
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
        {
          copyCardState ? 
          <CopyCard 
            token={newToken}
            navigateToDashboard = {props.navigateToDashboard}
          />
          :
          <RegistrationForm 
            validityPrompt={validityPrompt}
            onSubmit={getNewToken}
            onCancel={cancel}
        />
        }
      </CardContent>
    </Card>
  )
}

export default NewAccountCard