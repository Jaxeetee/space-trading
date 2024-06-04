import { 
  Tabs,   
  TabsContent,
  TabsList,
  TabsTrigger } from '@radix-ui/react-tabs'
import React, { useState, useEffect } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from '@/components/ui/card'
import { Contract } from '@/interface/player'
import useToken from '@/hooks/useToken'
import { getMyContracts } from '@/spacetraders-api/my/contracts'
import { TOKEN } from '@/lib/constants'


const Contracts = () => {
  const [contractList, setContractList] = useState<Array<Contract | undefined>>([]);
  const userToken = localStorage.getItem(TOKEN);

  const fetchContracts = async () =>  {
      const result = await getMyContracts(userToken);

      if (result)
      {
        setContractList(result);
      }
  }

  useEffect(() =>  {

    fetchContracts();
  },[])

  return (
    <Card className='max-w-fit '>
        <Table className='min-h-96'>
          <TableHeader>
            <TableRow>
              <TableCell>Faction</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>On Accepted</TableCell>
              <TableCell>On Fulfilled</TableCell>
              <TableCell>Expiration</TableCell>
              <TableCell>Deadline To Accept</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              contractList.length <=  0 ? 
              <div className='absolute w-full h-full p-4'>
                <h1 className='text-center text-offwhite'>There are no contracts available</h1>
              </div> 
              :
              <TableRow>
                {
                  contractList.map((value) =>  
                    <TableRow>
                      <TableCell>{value?.factionSymbol}</TableCell>
                      <TableCell>{value?.type}</TableCell>
                      <TableCell>{value?.terms.deadline}</TableCell>
                      <TableCell>{value?.terms.payment.onAccepted}</TableCell>
                      <TableCell>{value?.terms.payment.onFulfilled}</TableCell>
                      <TableCell>{value?.expiration}</TableCell>
                      <TableCell>{value?.deadlineToAccept}</TableCell>
                    </TableRow>
                  )
                }
              </TableRow>
            }

          </TableBody>
          <TableFooter>

          </TableFooter>
        </Table>
    </Card>
  )
}

export default Contracts