
export enum FactionSymbols{
  COSMIC = "COSMIC",
  VOID = "VOID",
  GALACTIC = "GALACTIC",
  QUANTUM = "QUANTUM",
  DOMINION = "DOMINION",
  ASTRO = "ASTRO",
  CORSAIRS = "CORSAIRS",
  OBSIDIAN = "OBSIDIAN",
  AEGIS = "AEGIS",
  UNITED = "UNITED",
  SOLITARY = "SOLITARY",
  COBALT = "COBALT",
  OMEGA = "OMEGA",
  ECHO = "ECHO",
  LORDS = "LORDS",
  CULT = "CULT",
  ANCIENTS = "ANCIENTS",
  SHADOW = "SHADOW",
  ETHEREAL = "ETHEREAL"
}

enum TraitSymbol{
  BUREAUCRATIC,
  SECRETIVE,
  CAPITALISTIC,
  INDUSTRIOUS,
  PEACEFUL,
  DISTRUSTFUL,
  WELCOMING,
  SMUGGLERS,
  SCAVENGERS,
  REBELLIOUS,
  EXILES,
  PIRATES,
  RAIDERS,
  CLAN,
  GUILD,
  DOMINION,
  FRINGE,
  FORSAKEN,
  ISOLATED,
  LOCALIZED,
  ESTABLISHED,
  NOTABLE,
  DOMINANT,
  INESCAPABLE,
  INNOVATIVE,
  BOLD,
  VISIONARY,
  CURIOUS,
  DARING,
  EXPLORATORY,
  RESOURCEFUL,
  FLEXIBLE,
  COOPERATIVE,
  UNITED,
  STRATEGIC,
  INTELLIGENT,
  RESEARCH_FOCUSED,
  COLLABORATIVE,
  PROGRESSIVE,
  MILITARISTIC,
  TECHNOLOGICALLY_ADVANCED,
  AGGRESSIVE,
  IMPERIALISTIC,
  TREASURE_HUNTERS,
  DEXTEROUS,
  UNPREDICTABLE,
  BRUTAL,
  FLEETING,
  ADAPTABLE,
  SELF_SUFFICIENT,
  DEFENSIVE,
  PROUD,
  DIVERSE,
  INDEPENDENT,
  SELF_INTERESTED,
  FRAGMENTED,
  COMMERCIAL,
  FREE_MARKETS,
  ENTREPRENEURIAL
}

export interface Faction{
  symbol: FactionSymbols;
  name: string;
  description: string;
  headquarters: string;
  traits: Array<Trait>;
  isRecruiting: boolean;
}

interface Trait {
  symbol: TraitSymbol;
  name: string;
  description: string;
}