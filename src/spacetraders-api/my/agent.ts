import { AccountData } from "@/interface/account";
import { my as api } from "../api";


export async function getAgent(token: string | null): Promise<AccountData | undefined>
{
  const options = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await api.get('/agent', options);
    return response.data.data;
  }
  catch (error) {
    console.error(error);
  }
} 