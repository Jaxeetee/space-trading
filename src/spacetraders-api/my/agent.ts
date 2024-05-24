import axios from "axios";
import API from "../api";


export async function getAgent(token: string): Promise<any> // will change promise type
{
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await API.get('/agent', options);

    if (!response.data)
    {
      throw new Error(`API request failed with status ${response.status}`)
    }
    return response.data.data;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
} 