import axios from "axios";
import API from "../api";
import { AccountData } from "@/interface/types";


export async function getAgent(token: string | undefined): Promise<AccountData | undefined> // TODO will change promise type
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
    return undefined;
  }
} 