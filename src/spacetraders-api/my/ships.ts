import { my as api } from "@/spacetraders-api/api";

enum ShipType {
  Ship_Probe,
  Ship_Mining_Drone,
  Ship_Interceptor,
  Ship_Light_Hauler,
  Ship_Command_Frigate,
  Ship_Explorer,
  Ship_Heavy_Freighter,
  Ship_Light_Shuttle,
  Ship_Ore_Hound,
  Ship_Refining_Freighter,
  Ship_Surveyor
}

export async function fetchShips(token: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try{
    const response = await api.get('/ships', options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function purchaseShip(token: string, data: {shipType: ShipType, waypointSymbol: string})
{
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    },
    data: data
  }

  try{
    const response = await api.get('/ships', options);
    console.log(response);
  }
  catch(err)
  {
    console.error(err);
  }
}

export async function fetchShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get(`/ships/${shipSymbol}`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function fetchShipCargo(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get(`/ships/${shipSymbol}/cargo`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function orbitShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/orbit`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function shipRefine(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/refine`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function createChart(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/chart`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function getShipCooldown(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get(`/ships/${shipSymbol}/cooldown`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function dockShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/dock`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function createSurvey(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/survey`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function extractResources(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/extract`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function siphonResources(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/siphon`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}

export async function extractWithSurvey(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/extract/survey`, options);
    console.log(response);
  }
  catch(err){
    console.error(err);
  }
}




