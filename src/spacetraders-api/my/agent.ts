import axios from "axios";
import API from "../api";
import { AccountData } from "@/interface/account";


export async function getAgent(token: string | null): Promise<AccountData | undefined>
{
  const options = {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const response = await API.get('/my/agent', options);
    return response.data.data;
  }
  catch (error) {
    console.error(error);
  }
} 