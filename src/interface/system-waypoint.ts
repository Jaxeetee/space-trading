import { Coordinate } from "./coordinate";
import { Faction } from "./faction";
import { systemType } from "@/types/system-waypoint";
//#region -== SYSTEM ==-

export interface System {
  symbol: string;
  sectorSymbol: string;
  type: systemType;
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
  orbits?: string | null;
  traits?: Array<Traits> | null;
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