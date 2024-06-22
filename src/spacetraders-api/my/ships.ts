import { my as api } from "@/spacetraders-api/api" 

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

export async function listShips(token: string | null, limit: number, page: number): Promise<any>
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try{
    const response = await api.get(`/ships?limit=${limit}&page=${page}`, options) 
    return response.data
  }
  catch(err)
  {
    console.error(err) 
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
    const response = await api.get('/ships', options) 
    console.log(response) 
  }
  catch(err)
  {
    console.error(err) 
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
    const response = await api.get(`/ships/${shipSymbol}`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.get(`/ships/${shipSymbol}/cargo`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/orbit`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/refine`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/chart`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.get(`/ships/${shipSymbol}/cooldown`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/dock`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/survey`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/extract`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/siphon`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
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
    const response = await api.post(`/ships/${shipSymbol}/extract/survey`, options) 
    console.log(response) 
  }
  catch(err){
    console.error(err) 
  }
}

export async function jettisonCargo(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/jettison`, options) 
    return response.data.data 
  }
  catch(err){
    console.error(err) 
  }
}


export async function jumpShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/jump`, options) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function navigateShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try{
    const response = await api.post(`/ships/${shipSymbol}/navigate`, options) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function patchShipNav(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.patch(`/ships/${shipSymbol}/nav`, options) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function getShipNav(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try{
    const response = await api.get(`/ships/${shipSymbol}/nav`, options) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function warpShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/warp`, options) 

  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function sellCargo(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/sell`, options) 
  }
  catch(err)
  {
    console.error(err) 
  }
}

export async function scanSystems(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/scan/systems`, options)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function scanWaypoints(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/scan/waypoints`, options)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function scanShips(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/scan/ships`, options)

  }
  catch(err)
  {
    console.error(err)
  }
}

export async function refuelShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/refuel`)
  }
  catch(err)
  {
    console.error(err)
  }

}

export async function purchaseCargo(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try{
    const response = await api.post(`/ships/${shipSymbol}/purchase`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function transferCargo(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/transfer`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function negotiateContract(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/negotiate/contract`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function getMounts(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get(`/ships/${shipSymbol}/mounts`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function installMount(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/mounts/install`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function removeMount(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/mounts/remove`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function getScrapShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get(`/ships/${shipSymbol}/scrap`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function scrapShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/scrap`)

  }
  catch(err)
  {
    console.error(err)
  }
}

export async function getRepairShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.get(`/ships/${shipSymbol}/repair`)
  }
  catch(err)
  {
    console.error(err)
  }
}

export async function repairShip(token: string, shipSymbol: string)
{
  const options = {
    headers: {
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  try {
    const response = await api.post(`/ships/${shipSymbol}/repair`)
  }
  catch(err)
  {
    console.error(err)
  }
}


