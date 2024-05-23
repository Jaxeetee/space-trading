import axios from "axios";
import API from "../api";
import { AccountData, MY_TOKEN } from "./types";

// checks if player name's taken
export async function doesAccountExists(token: string): Promise<boolean>
{
  const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };
  
  const data = {
    'Authorization': `Bearer ${token}`
  }
  
  try {
    const response = await API.get('/my/agent', { data });

    if (!response.data) return false;

    return true;
  }
  catch (err) {
    console.error(err);
  }

  return false;
}

 
export function generateToken(callsign: string)
{
  const data = {
      symbol: callsign,
      faction: "COSMIC",
  };

  try{
    API.post('/register', data )
      .then(res =>  { return res.data.data })
      .catch(err =>  {console.error(err)})
  } catch (error) {
    console.error('Error generating token:', error);
    throw error; // Re-throw for proper handling at the call site
  }
}

