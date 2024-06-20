import { global as api } from "@/spacetraders-api/api";
import { FactionSymbols } from "@/interface/faction";
import { ErrorType } from "@/interface/error";

type errorType = {
  message: string,
  code: number
}
 
//TODO Make it so that the player can choose a faction based from all the factions provided
export async function generateToken(callsign: string, faction?: FactionSymbols): Promise<string | ErrorType>
{

  const data = {
      symbol: callsign,
      faction: faction ? faction : "COSMIC", 
  };

  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const response = await api.post('/register', data, { headers })
    return response.data.data.token as string;
  } 
  catch (error: any) {
    return error.response.data.error as ErrorType;
  }
}

