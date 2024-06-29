import {useState, useEffect} from 'react'
import { Card, CardContent } from '../ui/card'

import { listSystems } from '@/spacetraders-api/systems/systems'
import { System } from '@/interface/system-waypoint'
import { isSystemPagination } from '@/utils/typeChecker'
import SystemInfo from './SystemInfo'
import { ScrollArea } from '@radix-ui/react-scroll-area'

const World = () =>  {
  const [systems, setSystems] = useState<Array<System>>([])

  useEffect(() =>  {
    listSystems()
      .then(data =>  {
        if (isSystemPagination(data))
        {
          setSystems(data.data as Array<System>)
          
        }
        else {
          console.log(data)
        }
      })
  }, [])
  return (
    <Card className='p-1'>
      <ScrollArea className="h-96 overflow-auto">
      {
        systems ? 
          systems.map((value, index) =>  (
            <SystemInfo 
              key={index}
              {...value}
            />
          ))
        :
        <h1>No Systems available</h1>
      }
      </ScrollArea>
    </Card>
  )
}

export default World