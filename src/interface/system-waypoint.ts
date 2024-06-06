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
  symbol: string;
  type: string;
  systemSymbol: string;
  x: number;
  y: number;
  orbitals: Array<Symbol>;
  orbits?: string | undefined;
  traits?: Array<Traits>;
  modifiers?: Array<string>;
  chart: Chart;
  faction: Symbol;
  isUnderConstruction: boolean;
}