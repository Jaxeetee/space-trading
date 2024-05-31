import axios from "axios";
import API from "../api";
import { AccountData, MY_TOKEN } from "./types";
import { error } from "console";

 
export async function generateToken(callsign: string): Promise<string | undefined>
{

  const data = {
      symbol: callsign,
      faction: "COSMIC",
  };

  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const response = await API.post('/register', data, { headers })
    console.log(response);

    return response.data.data.token;
  } 
  catch (error) {
    
    return undefined;
  }
}

