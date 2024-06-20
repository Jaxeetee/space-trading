import { AccountData } from "@/interface/account";
import { my as api } from "../api";
import { ErrorType } from "@/interface/error";


export async function getAgent(token: string | null): Promise<AccountData | ErrorType>
{
  const options = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await api.get('/agent', options);
    return response.data.data as AccountData;
  }
  catch (error: any) {
    return error.response.data.error as ErrorType
  }
} 