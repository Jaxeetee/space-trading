import { 
  Tabs,   
  TabsContent,
  TabsList,
  TabsTrigger } from "@radix-ui/react-tabs"
import React, { useState, useEffect } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Card } from "@/components/ui/card"
import { Contract } from "@/interface/contract"
import useToken from "@/hooks/useToken"
import { fetchMyContracts } from "@/spacetraders-api/my/contracts"
import { TOKEN } from "@/lib/constants"


const Contracts = () => {
  const [contractList, setContractList] = useState<Array<Contract | undefined>>([]);
  const userToken = localStorage.getItem(TOKEN);

  const fetchContracts = () =>  {
    fetchMyContracts(userToken)
      .then(data =>  {
        if (data)
        {
          setContractList(data);
        }
      });
  }

  useEffect(() =>  {
    fetchContracts();
  },[])

  return (
    <Card className="h-96">
      {
        contractList.length <=  0 ? 
        <div className="flex justify-center items-center h-full p-4 ">
          <h1 className="text-center align-middle w-1/2 h-1/2 text-offwhite">There are no contracts available</h1>
        </div> 
        :
        <Table className="min-h-96">
          <TableHeader>
            <TableRow>
              <TableCell>Faction</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>On Accepted</TableCell>
              <TableCell>On Fulfilled</TableCell>
              <TableCell>Deadline To Accept</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
              {
                contractList.map((value, index) =>  
                  <TableRow key={index}>
                    <TableCell>{value?.factionSymbol}</TableCell>
                    <TableCell>{value?.type}</TableCell>
                    <TableCell>{value?.terms.deadline.toString()}</TableCell>
                    <TableCell>{value?.terms.payment.onAccepted}</TableCell>
                    <TableCell>{value?.terms.payment.onFulfilled}</TableCell>
                    <TableCell>{value?.deadlineToAccept.toString()}</TableCell>
                  </TableRow>
                )
              }
          </TableBody>
          <TableFooter>

          </TableFooter>
        </Table>
      }
    </Card>
  )
}

export default Contracts