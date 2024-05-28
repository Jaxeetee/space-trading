import axios from "axios";
import API from "../api";
import { AccountData, MY_TOKEN } from "./types";
import { error } from "console";

 
export async function generateToken(callsign: string): Promise<any>
{

  const data = {
      symbol: callsign,
      faction: "COSMIC",
  };

  const headers = {
    'Content-Type': 'application/json',
  }

  try{
    const response = await API.post('/register', data, { headers })
    console.log(response);

    if (response.status == 409)
    {
      throw new Error("Invalid Callsign");
    } else {
      return response.data.data.token;
    }
    } catch (error) {
    // TODO: if error, return error code. Will probably use toasters.
    console.error('Error generating token:', error);
    throw error; // Re-throw for proper handling at the call site
  }
}

