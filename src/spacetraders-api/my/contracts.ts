import { my as api } from '@/spacetraders-api/api';
import { Contract } from '@/interface/contract';

export async function fetchMyContracts(token: string | null): Promise<Array<Contract> | undefined>
{
  const options = { 
    headers: {
      'Accept' : 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get('/contracts', options);
    console.log(response);
    return response.data.data;
  }
  catch (err) {
    console.error(err);
  }
}

export async function fetchContract(token: string, contractID: string)
{
  const options = {
    headers: {
      'Accept' : 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get(`/contracts/${contractID}`, options);
    console.log(response);
  }
  catch (err) {
    console.error(err);
  }
}

export async function acceptContract(token: string, contractID: string)
{
  const options = {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/contracts/${contractID}/accept`, options);
    console.log(response);
  }
  catch (err) {
    console.error(err);
  }
}

export async function deliverCargo(
  token: string, 
  contractID: string, 
  data: {
    shipSymbol: string, 
    tradeSymbol: string, 
    units: number})
{
  const options = {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'Application/json',
      'Authorization' : `Bearer ${token}`
    },
    data: data
  }

  try {
    const response = await api.post(`/contracts/${contractID}/deliver`, options);
    console.log(response);
  }
  catch (err)
  {
    console.error(err)
  }
}

export async function fulfillCargo(token: string, contractID: string)
{
  const options = { 
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'Application/json',
      'Authorization' : `Bearer ${token}`
    },
  }

  try {
    const response = await api.post(`/contracts/${contractID}/fulfill`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

