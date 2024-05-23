import axios from "axios";
import { AccountData } from "./types";

export async function getMyDetails(token: string): Promise<AccountData | undefined>
{
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }

  try{
    const response = await axios.get('https://api.spacetraders.io/v2/my/agent', options);

    if (!response.data)
    {
      throw new Error(`API request failed with status ${response.status}`)
    }
    return response.data.data as AccountData;
  }
  catch(err)
  {
    console.error(err);
    return undefined;
  }
}