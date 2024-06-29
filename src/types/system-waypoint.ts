const system = {
  NEUTRON_STAR : 'NEUTRON_STAR',
  RED_STAR : 'RED_STAR',
  ORANGE_STAR : 'ORANGE_STAR',
  BLUE_STAR : 'BLUE_STAR',
  YOUNG_STAR : 'YOUNG_STAR',
  WHITE_DWARF : 'WHITE_DWARF',
  BLACK_HOLE : 'BLACK_HOLE',
  HYPERGIANT : 'HYPERGIANT',
  NEBULA : 'NEBULA',
  UNSTABLE : 'UNSTABLE'
} as const

export type systemType = typeof system[keyof typeof system]