import axios from 'axios';

export const global = axios.create({
  baseURL:"https://api.spacetraders.io/v2", 
  headers: {
    'Accept': 'application/json'
  }})

export const my = axios.create({
  baseURL:"https://api.spacetraders.io/v2/my"
})