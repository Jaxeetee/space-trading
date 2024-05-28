import axios from "axios";
import API from "../api";


export async function getAgent(token: string | undefined): Promise<any> // TODO will change promise type
{
  const options = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  console.log(`current token: ${token}`)
  try {
    const response = await API.get('/my/agent', options);
    
    if (!response.data)
    {
      throw new Error(`API request failed with status ${response.data.error.code}`)
    }
    return response.data.data;
  }
  catch (error) {
    console.error(error);
  }
} 