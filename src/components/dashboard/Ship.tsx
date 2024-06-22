import React from 'react'

import { 
  Card
} from '../ui/card'


const Ship = (props: any) => {
  return (
    <Card className='m-4 p-2 rounded-[5px]'>
      <h1>{props.shipDetails.symbol}</h1>
      <h3>{props.shipDetails.registration.role}</h3>
    </Card>
  )
}

export default Ship