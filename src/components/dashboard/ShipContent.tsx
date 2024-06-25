import useToken from "@/hooks/useToken"
import { Ship as ship } from "@/interface/ship"
import { listShips } from "@/spacetraders-api/my/ships"
import { useEffect, useState } from "react"
import { Card } from "../ui/card"
import Ship from "./Ship"

const ShipsTabContent = () => {
  const [playerShips, setPlayerShips] = useState<Array<ship>>([])
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const token = useToken()


  useEffect(() => {
    listShips(token, limit, page)
      .then(data =>  setPlayerShips(data.data))
  }, [])

  return (
    <Card className="grid md:grid-cols-2 grid-cols-1 gap-8 p-4 rounded-[6px] min-h-96 ">
      {
        playerShips ? 
          playerShips.map((value, index) =>  
            <Ship 
              key={index}
              {...value}
            />
          )
          :
          <Card>
            <h1 className="text-red-100">agent has no ships</h1>
          </Card>
      }
    </Card>
  )
}

export default ShipsTabContent