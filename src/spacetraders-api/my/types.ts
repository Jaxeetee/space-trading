export const MY_TOKEN: string = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiU1A0Q0VfTk9NQUQiLCJ2ZXJzaW9uIjoidjIuMi4wIiwicmVzZXRfZGF0ZSI6IjIwMjQtMDUtMTkiLCJpYXQiOjE3MTY0MzgwODMsInN1YiI6ImFnZW50LXRva2VuIn0.QOCDAd92cuzUXHhmMGW5YF8M5kO5_ZNDRGZdkz8UVai4jjIYu9hUW2WX6pVry9XEADScjyuMCZetjXuaSI_4urOUKSrJaZwu9quHf5_F0iJ79UAUyyoRi8Ol52EQz-6IbeLGVHcEH9r_y77RihQi-NEIu7f9MzMQ0__xKlHr0ceDe0cqFuRNGoGbU_5cIvXTxSWOnq3E8kKJkUSfsIVfVr9UnBcN4YiNkZ02FZZc1JYZErLwNtgJdzy_4YR5-TRNNMShI8v_X21iqlfd0UTEOMEtxpfNogrns-sjeDNCSD96j3XXvvGVlpFVpowNLYbl74RMiIAoLN8GOcsn91aDfw";

export interface AccountData {
  accountID: string;
  credits: number;
  headquarters: string;
  shipCount: number;
  startingFaction: string;
  symbol: string;
}

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

export interface Terms {
  deadline: string;
  payment: Payment;
}

export interface Payment {
  onAccepted: number;
  onFulfilled: number;
}

export interface Deliverables {
  tradeSymbol: string;
  destinationSymbol: string;
  unitsRequired: number;
  unitsFulfilled: number;
}

export interface Contract {
  id: string;
  factionSymbol: string;
  type: string;
  terms: Terms;
  deliver: Deliverables[];
  accepted: boolean;
  fulfilled: boolean;
  expiration: string;
  deadlineToAccept: string;
}

export interface Trait {
  symbol: string;
  name: string;
  description: string;
}

export interface Faction {
  symbol: string;
  name: string;
  description: string;
  headquarters: string;
  traits: Trait[];
  isRecruiting: boolean;
}

export interface Spot {
  symbol: string;
  type: string;
  systemSymbol: string;
  x: number;
  y: number;
}

export interface Route {
  origin: Spot;
  destination: Spot;
  arrival: string;
  departureTime: string;
}

export interface Nav {
  systemSymbol: string;
  waypointSymbol: string;
  route: Route;
  status: string;
  flightMode: string;
}

export interface Crew {
  current: number;
  capacity: number;
  required: number;
  rotation: string;
  morale: number;
  wages: number;
}

export interface Consumed {
  amount: number;
  timestamp: string;
}

export interface Fuel {
  current: number;
  capacity: number;
  consumed: Consumed;
}

export interface Cooldown {
  shipSymbol: string;
  totalSeconds: number;
  remainingSeconds: number;
}

export interface Requirements {
  power?: number | undefined;
  slots?: number | undefined;
  crew: number;
}

export interface Frame {
  symbol: string;
  name: string;
  description: string;
  moduleSlots: number;
  mountingPOints: number;
  fuelCapacity: number;
  condition: number;
  integrity: number;
  requirements: Requirements;
}

export interface Reactor {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  powerOutput: number;
  requirements: Requirements
}

export interface Engine {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  speed: number;
  requirements: Requirements;
}

export interface Module {
  symbol: string;
  name: string;
  description: string;
  capacity: number;
  requirements: Requirements;
}

export interface Mount {
  symbol: string;
  name: string;
  description: string;
  strength: number;
  requirements: Requirements;
}

export interface Registration {
  name: string;
  factionSymbol: string;
  role: string;
}

export interface Cargo {
  capacity: number;
  units: number;
  inventory: any;
}

export interface Ship {
  symbol: string;
  nav: Nav;
  crew: Crew;
  fuel: Fuel;
  cooldown: Cooldown;
  frame: Frame;
  reactor: Reactor;
  modules: Module[];
  mounts: Mount[];
  registration: Registration;
  cargo: Cargo;
}