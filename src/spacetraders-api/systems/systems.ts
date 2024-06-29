import { ErrorType } from '@/interface/error'
import { System } from '@/interface/system-waypoint'
import { global as api } from '@/spacetraders-api/api' 

interface pagination {
  total: number 
  page: number 
  limit: number 
}

interface systemArr {
  data: Array<System>,
  meta: pagination
}

export async function listSystems(): Promise<systemArr   | ErrorType>
{
  try {
    const response = await api.get("/systems")  
    return response.data as systemArr
  }
  catch (err: any) {
    console.error(`failed to fetch data: ${err}`) 
    return err.response.data.error as ErrorType 
  }
}

export async function getSystem(systemSymbol: string): Promise<{data: System[], meta: pagination} | ErrorType>
{
  try {
    const response = await api.get(`/systems/${systemSymbol}`) 
    return response.data as {data: System[], meta: pagination}
  }
  catch(err: any){
    return err.response.data.error as ErrorType
  }
}

export async function fetchWaypoints(systemSymbol: string)
{
    try {
      const response = await api.get(`/systems/${systemSymbol}/waypoints`) 
      console.log(response) 
    }
    catch(err)
    {
      console.error(err) 
    }
}

export async function fetchWaypoint(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}`) 
    console.log(response) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function fetchMarket(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/market`) 
    console.log(response) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function fetchShipyard(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/shipyard`) 
    console.log(response) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function fetchJumpGate(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/jump-gate`) 
    console.log(response) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function fetchConstructionSite(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/construction`) 
    console.log(response) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function supplyConstructionSite(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.post(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/construction/supply`) 
    console.log(response) 
  }
  catch(err)
  {
    console.error(err) 
  }
}



