import API from "@/spacetraders-api/api";

type errorType = {
  message: string,
  code: number
}
 
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

    return response.data.data.token;
  } 
  catch (error: any) {
    console.error(error);

    const errorType = {
      message: error.response.data.error.message,
      code: error.response.data.error.code
    };
    //TODO I think its a bad design to return undefined. 
    return undefined;
  }
}

