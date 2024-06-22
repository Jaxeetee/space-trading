import { Coordinate } from "./coordinate";
import {
  StatusType,
  FlightModeType,
  DestinationType,
  RotationType,
  FrameType,
  ReactorSymbolsType,
  EngineSymbolsType,
  ModuleSymbolsType,
  MountSymbolsType,
  DepositSymbolsType,
  ItemsType
} from "@/types/ship"

export interface Ship {
  symbol: string;
  registration: Registration;
  nav: NavInfo;
  crew: Crew;
  frame: Frame;
  reactor: Reactor;
  engine: Engine;
  cooldown: Cooldown;
  modules: Array<Module>;
  mounts: Array<Mount>;
  cargo: Cargo;
  fuel: Fuel;
}

//#region other interfaces for Ship
interface Registration {
  name: string;
  factionSymbol: string;
  role: string;
}

//*  Used in Frame, Reactor, Engine, Module, Mount
interface Requirements{
  power: number,
  crew: number,
  slots: number
}

//#region -== NAV INFO ==-
interface NavInfo {
  systemSymbol: string;
  waypointSymbol: string;
  route: Route;
  status: StatusType;
  flightMode: FlightModeType;
}

interface Route {
  destination: Destination;
  origin: Destination;
  departureTime: Date;
  arrival: Date;
}

//#region Interfaces for Route
interface Destination {
  symbol: string;
  type: DestinationType;
  systemSymbol: string;
  x: Coordinate["x"];
  y: Coordinate["y"];
}
//#endregion
//#endregion

//#region -== CREW ==-

interface Crew {
  current: number;
  required: number;
  capacity: number;
  rotation: RotationType;
  morale: number;
  wages: number;
}
//#endregion

//#region -== FRAME ==-
interface Frame {
  symbol: FrameType;
  name: string;
  description:string;
  condition: number;
  integrity: number;
  moduleSlots: number;
  mountingPoints: number;
  fuelCapacity: number;
  requirements: Requirements;
}

//#endregion

//#region -== REACTOR ==-
interface Reactor {
  symbol: ReactorSymbolsType;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  powerOutput: number;
  requirements: Requirements;
}

//#endregion 

//#region -== ENGINE ==-
interface Engine {
  symbol:EngineSymbolsType;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  speed: number;
  requirements: Requirements;
}

//#endregion

//#region -== COOLDOWN ==- 
interface Cooldown{
  shipSymbol: string;
  totalSeconds: number;
  remainingSeconds: number;
  expiration: Date;
}
//#endregion

//#region -== MODULES ==- 
interface Module {
  symbol: ModuleSymbolsType;
  name: string;
  description: string;
  capacity: number;
  requirements: Requirements;
}

//#endregion

//#region -== MOUNTS ==- 
interface Mount {
  symbol: MountSymbolsType;
  name: string;
  description: string;
  strength: number;
  deposits: Array<DepositSymbolsType>
  requirements: Requirements;
}


//#endregion

//#region -== CARGO ==-
export interface Cargo {
  capacity: number;
  units: number;
  inventory: Array<ItemsType>;
}

//#endregion

//#region -== FUEL ==-
interface Fuel {
  current: number;
  capacity: number;
  consumed: FuelConsumed;
}

interface FuelConsumed {
  amount: number;
  timestamp: string; //TODO date and time string type
}
//#endregion

//#endregion