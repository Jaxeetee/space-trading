export interface AccountData {
  accountID: string;
  credits: number;
  headquarters: string;
  shipCount: number;
  startingFaction: string;
  symbol: string;
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

export interface Waypoint {
  systemSymbol: string;
  symbol: string;
  type: string;
  x: number;
  y: number;
  orbitals?: Array<Symbol>;
  traits?: Array<Traits>;
  modifiers?: Array<string>;
  chart: Chart;
  faction?: Symbol;
  isUnderConstruction: boolean;
}