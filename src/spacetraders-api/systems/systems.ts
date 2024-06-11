import { global as api } from '@/spacetraders-api/api';

interface responseData {
  data: Array<any>;
  meta: pagination;
}

interface pagination {
  total: number;
  page: number;
  limit: number;
}

export async function fetchSystems(): Promise<responseData | null>
{
  try {
    const response = await api.get("/systems");
    console.log(response);
    return response.data;
  }
  catch (err) {
    console.error(`failed to fetch data: ${err}`);
    return null;
  }
}

export async function fetchSystemStats(systemSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}`);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function fetchWaypoints(systemSymbol: string)
{
    try {
      const response = await api.get(`/systems/${systemSymbol}/waypoints`);
      console.log(response);
    }
    catch(err)
    {
      console.error(err);
    }
}

export async function fetchWaypoint(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}`);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchMarket(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/market`);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchShipyard(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/shipyard`);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchJumpGate(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/jump-gate`);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchConstructionSite(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/construction`);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function supplyConstructionSite(systemSymbol: string, waypointSymbol: string)
{
  try {
    const response = await api.post(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/construction/supply`);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}



