import axios from "axios";
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
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }


  try {
    const response = await api.get("/systems", options);
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
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }

  try {
    const response = await api.get(`/systems/${systemSymbol}`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function fetchWaypoints(systemSymbol: string)
{
    const options = {
      headers: {
        'Accept' : 'application/json'
      }
    }

    try {
      const response = await api.get(`/systems/${systemSymbol}/waypoints`, options);
      console.log(response);
    }
    catch(err)
    {
      console.error(err);
    }
}

export async function fetchWaypoint(systemSymbol: string, waypointSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }

  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}`, options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchMarket(systemSymbol: string, waypointSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }

  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/market`, options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchShipyard(systemSymbol: string, waypointSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }

  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/shipyard`, options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchJumpGate(systemSymbol: string, waypointSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }

  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/jump-gate`, options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchConstructionSite(systemSymbol: string, waypointSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }

  try {
    const response = await api.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/construction`, options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function supplyConstructionSite(systemSymbol: string, waypointSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json'
    }
  }

  try {
    const response = await api.post(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/construction/supply`, options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}



