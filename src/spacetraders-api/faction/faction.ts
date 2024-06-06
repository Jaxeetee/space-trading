import { global } from "@/spacetraders-api/api"

export async function getFactions() 
{

  try {
    const response = await global.get('/factions');
    console.log(response);
  }
  catch (err) {
    console.error(err);
  }
}