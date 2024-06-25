import React from "react"

import { 
  Card
} from "../ui/card"

import {
  Badge
} from "../ui/badge"
import { Ship as ship} from "@/interface/ship"


const Ship = (shipDetails: ship) => {
  return (
    <Card className="m-4 p-2 rounded-[5px] max-h-40">
      <h1><span className="text-xs font-semibold">shipname: </span>{shipDetails.symbol}</h1>
      <span className="text-xs font-semibold">type: </span>
      <Badge variant={"outline"} className="bg-offwhite text-stone-900 ">{shipDetails.registration.role}</Badge>
      <h6><span className="text-xs font-semibold">fuel: </span>{shipDetails.fuel.current} / {shipDetails.fuel.capacity}</h6>
    </Card>
  )
}

export default Ship