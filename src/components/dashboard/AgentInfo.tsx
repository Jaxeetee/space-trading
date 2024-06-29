import React, {useEffect, useState} from "react"

import { TOKEN } from "@/lib/constants" 
import { AccountData } from "@/interface/account" 
import { getAgent } from "@/spacetraders-api/my/agent" 
import { Card, CardContent } from "../ui/card" 
import useToken from "@/hooks/useToken" 
import { isAccountDataType } from "@/utils/typeChecker" 
import  { CurrencyDollarIcon } from "@heroicons/react/24/outline"

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
    <div className="px-0 py-1 mb-2 md:flex md:flex-col md:w-screen 2xl:w-4/6">
      <CardContent className="relative md:flex md:flex-row justify-between max-w-full p-2">
        <div className="flex flex-col min-w-fit w-full">
          <h1 className="text-xl text-stone-600 font-medium">WELCOME</h1>
          <h1 className="text-2xl text-yellow-200"><span className="font-semibold text-amber-500">[{agentDetails?.startingFaction}]</span> {agentDetails?.symbol}</h1>
          <h1 className="text-sm">HQ Location: <span className="text-md text-yellow-200">
              {agentDetails?.headquarters}
            </span>
          </h1>
        </div>
        <div className="flex flex-row gap-2">
          <CurrencyDollarIcon width={24} height={24}/>
          <h1 className="text-md text-center text-yellow-200">{agentDetails?.credits}</h1>
        </div>
      </CardContent>
    </div>
  )
}

export default AgentInfo