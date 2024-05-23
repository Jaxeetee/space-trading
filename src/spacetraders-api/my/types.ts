export const MY_TOKEN: string = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiU1A0Q0VfTk9NQUQiLCJ2ZXJzaW9uIjoidjIuMi4wIiwicmVzZXRfZGF0ZSI6IjIwMjQtMDUtMTkiLCJpYXQiOjE3MTY0MzgwODMsInN1YiI6ImFnZW50LXRva2VuIn0.QOCDAd92cuzUXHhmMGW5YF8M5kO5_ZNDRGZdkz8UVai4jjIYu9hUW2WX6pVry9XEADScjyuMCZetjXuaSI_4urOUKSrJaZwu9quHf5_F0iJ79UAUyyoRi8Ol52EQz-6IbeLGVHcEH9r_y77RihQi-NEIu7f9MzMQ0__xKlHr0ceDe0cqFuRNGoGbU_5cIvXTxSWOnq3E8kKJkUSfsIVfVr9UnBcN4YiNkZ02FZZc1JYZErLwNtgJdzy_4YR5-TRNNMShI8v_X21iqlfd0UTEOMEtxpfNogrns-sjeDNCSD96j3XXvvGVlpFVpowNLYbl74RMiIAoLN8GOcsn91aDfw";

export type AccountData = {
  accountID: string;
  credits: number;
  headquarters: string;
  shipCount: number;
  startingFaction: string;
  symbol: string;
} 


export type Account = {
  token: string;
  agent: Agent;
  contract: Contract;
  faction: Faction;
  shop: Ship;
}



export type Agent = {
  accountID: string;
  symbol: string;
  headquarters: string;
  credits: number;
  startingFaction: string;
  shipCount: number;
}

export type Terms = {
  deadline: string;
  payment: Payment;
}

export type Payment = {
  onAccepted: number;
  onFulfilled: number;
}

export type Deliverables = {
  tradeSymbol: string;
  destinationSymbol: string;
  unitsRequired: number;
  unitsFulfilled: number;
}

export type Contract = {
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

export type Trait = {
  symbol: string;
  name: string;
  description: string;
}

export type Faction = {
  symbol: string;
  name: string;
  description: string;
  headquarters: string;
  traits: Trait[];
  isRecruiting: boolean;
}

export type Spot = {
  symbol: string;
  type: string;
  systemSymbol: string;
  x: number;
  y: number;
}

export type Route = {
  origin: Spot;
  destination: Spot;
  arrival: string;
  departureTime: string;
}

export type Nav = {
  systemSymbol: string;
  waypointSymbol: string;
  route: Route;
  status: string;
  flightMode: string;
}

export type Crew = {
  current: number;
  capacity: number;
  required: number;
  rotation: string;
  morale: number;
  wages: number;
}

export type Consumed = {
  amount: number;
  timestamp: string;
}

export type Fuel = {
  current: number;
  capacity: number;
  consumed: Consumed;
}

export type Cooldown = {
  shipSymbol: string;
  totalSeconds: number;
  remainingSeconds: number;
}

export type Requirements = {
  power: number | undefined;
  slots: number | undefined;
  crew: number;
}

export type Frame = {
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

export type Reactor = {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  powerOutput: number;
  requirements: Requirements
}

export type Engine = {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  speed: number;
  requirements: Requirements;
}

export type Module = {
  symbol: string;
  name: string;
  description: string;
  capacity: number;
  requirements: Requirements;
}

export type Mount = {
  symbol: string;
  name: string;
  description: string;
  strength: number;
  requirements: Requirements;
}

export type Registration = {
  name: string;
  factionSymbol: string;
  role: string;
}

export type Cargo = {
  capacity: number;
  units: number;
  inventory: any;
}

export type Ship = {
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