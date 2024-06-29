import React from 'react'
import {
  Card
} from "../ui/card"
import { System } from '@/interface/system-waypoint'
import { Badge } from '../ui/badge'

const SystemInfo = (data: System) => {
  return (
    <Card className='rounded-[5px] border-[.25px] p-2 m-2'>
      <h3 className="font-medium">{data.symbol}</h3>
      <Badge className="bg-offwhite text-black rounded-3xl">{data.type}</Badge>
      
    </Card>
  )
}

export default SystemInfo