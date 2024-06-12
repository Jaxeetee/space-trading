import { global as api } from "@/spacetraders-api/api";
import { FactionSymbols } from "@/interface/faction";

type errorType = {
  message: string,
  code: number
}
 
//TODO Make it so that the player can choose a faction based from all the factions provided
export async function generateToken(callsign: string, faction?: FactionSymbols): Promise<string | undefined>
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
    return response.data.data.token;
  } 
  catch (error: any) {
    console.error(error);

    //TODO I think its a bad design to return undefined. esp in catch block
    return undefined;
  }
}

