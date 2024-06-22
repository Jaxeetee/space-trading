import React, {useEffect, useState} from 'react'

import { TOKEN } from '@/lib/constants' 
import { AccountData } from '@/interface/account' 
import { getAgent } from '@/spacetraders-api/my/agent' 
import { Card, CardContent } from '../ui/card' 
import useToken from '@/hooks/useToken' 
import { isAccountDataType } from '@/utils/typeChecker' 

const AgentInfo = () =>  {
  const [agentDetails, setAgentDetails] = useState<AccountData>() 
  const userToken = useToken() 

  const fetchData =  () =>  {
    getAgent(userToken)
      .then(data =>  {
        if(isAccountDataType(data))
        {
          setAgentDetails(data) 
        }
      })
  } 

  useEffect(() => {
    
    fetchData()    
  }, [])
  return (
    <Card className='mb-4 max-w-fit'>
      <CardContent className='grid grid-cols-5 max-w-fit place-items-start'>
        <div className='flex flex-col w-full p-2'>
          <h1 className='text-[.6rem] text-center'>AGENT</h1>
          <h1 className='text-xs text-center text-yellow-200'>{agentDetails?.symbol}</h1>
        </div>
        <div className='flex flex-col w-full p-2'>
          <h1 className='text-[.6rem] text-center'>HEADQUARTERS</h1>
          <h1 className='text-xs text-center text-yellow-200'>{agentDetails?.headquarters}</h1>
        </div>
        <div className='flex flex-col w-full p-2'>
          <h1 className='text-[.6rem] text-center'>CREDITS</h1>
          <h1 className='text-xs text-center text-yellow-200'>{agentDetails?.credits}</h1>
        </div>
        <div className='flex flex-col w-full p-2'>
          <h1 className='text-[.6rem] text-center'>FACTION</h1>
          <h1 className='text-xs text-center text-yellow-200'>{agentDetails?.startingFaction}</h1>
        </div>
        <div className='flex flex-col w-full p-2'>
          <h1 className='text-[.6rem] text-center'>SHIP COUNT</h1>
          <h1 className='text-xs text-center text-yellow-200'>{agentDetails?.shipCount}</h1>
        </div>
      </CardContent>
    </Card>
  )
}

export default AgentInfo