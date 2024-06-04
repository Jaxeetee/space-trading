import API from "@/spacetraders-api/api"

export async function getFactions() 
{
  const options = {
    headers: {
      'Accept' : 'Application/json'
    }
  }

  try {
    const response = await API.get('/factions', options);
    console.log(response);
  }
  catch (err) {
    console.error(err);
  }
}