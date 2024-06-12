import { Ship } from "./ship";
import { Contract } from "./contract";
import { Faction } from "./faction";

export interface Account {
  token: string;
  agent: Agent;
  contract: Contract;
  faction: Faction;
  ship: Ship;
}

export interface Agent {
  accountID: string;
  symbol: string;
  headquarters: string;
  credits: number;
  startingFaction: string;
  shipCount: number;
}

export interface Spot {
  symbol: string;
  type: string;
  systemSymbol: string;
  x: number;
  y: number;
}
