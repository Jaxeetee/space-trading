import { Coordinate } from "./coordinate";
import { Faction } from "./faction";

//#region -== SYSTEM ==-
export enum SystemType{
  NEUTRON_STAR,
  RED_STAR,
  ORANGE_STAR,
  BLUE_STAR,
  YOUNG_STAR,
  WHITE_DWARF,
  BLACK_HOLE,
  HYPERGIANT,
  NEBULA,
  UNSTABLE
}

export interface System{
  symbol: string;
  sectorSymbol: string;
  type: SystemType;
  x: Coordinate["x"];
  y: Coordinate["y"];
  waypoints: Array<Waypoint>;
  factions: Array<Faction>;
}

//#endregion

//#region -== WAYPOINT ==-
export interface Waypoint {
  symbol: string;
  type: string;
  systemSymbol: string;
  x: Coordinate["x"];
  y: Coordinate["y"];
  orbitals: Array<Symbol>;
  orbits?: string | undefined;
  traits?: Array<Traits>;
  modifiers?: Array<string>;
  chart: Chart;
  faction: Symbol;
  isUnderConstruction: boolean;
}

interface Symbol {
  symbol: string;
}

interface Traits {
  symbol: string;
  name: string;
  description: string;
}

interface Chart {
  submittedBy: string;
  submittiedOn: string;
}


//#endregion