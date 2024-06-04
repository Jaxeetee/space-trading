import API from '@/spacetraders-api/api';
import { Contract } from '@/interface/player';

export async function getMyContracts(token: string | null): Promise<Array<Contract> | undefined>
{
  const options = { 
    headers: {
      'Accept' : 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await API.get('/my/contracts', options);
    console.log(response);
    return response.data.data;
  }
  catch (err) {
    console.error(err);
  }
}