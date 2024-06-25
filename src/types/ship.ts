//*  Saw a youtube video showcasing this style instead of using enums. 
//*  Will experiment it here
//*  And see if it's worth refactoring enums into types
//*  Link: https://www.youtube.com/watch?v=pWPClHdcvVg

const FlightMode = {
  DRIFT: 'DRIFT',
  STEALTH: 'STEALTH',
  CRUISE: 'CRUISE',
  BURN: 'BURN'
} as const

const Status = {
  IN_TRANSIT: 'IN_TRANSIT,',
  IN_ORBIT: 'IN_ORBIT,',
  DOCKED: 'DOCKED'
} as const

const Destination = {
  PLANET: "  PLANET",
  GAS_PLANET: "  GAS_PLANET",
  MOON: "  MOON",
  ORBITAL_STATION: "  ORBITAL_STATION",
  JUMP_GATE: "  JUMP_GATE",
  ASTEROID_FIELD: "  ASTEROID_FIELD",
  ASTEROID: "  ASTEROID",
  ENGINEERED_ASTEROID: "  ENGINEERED_ASTEROID",
  ASTEROID_BASE: "  ASTEROID_BASE",
  NEBULA: "  NEBULA",
  DEBRIS_FIELD: "  DEBRIS_FIELD",
  GRAVITY_WELL: "  GRAVITY_WELL",
  ARTIFICIAL_GRAVITY_WELL: "  ARTIFICIAL_GRAVITY_WELL",
  FUEL_STATION: "  FUEL_STATION"
} as const

const Rotation = {
  STRICT: "STRICT",
  RELAXED: "RELAXED"
} as const

const Frame = {
  FRAME_PROBE: "FRAME_PROBE",
  FRAME_DRONE: "  FRAME_DRONE",
  FRAME_INTERCEPTOR: "  FRAME_INTERCEPTOR",
  FRAME_RACER: "  FRAME_RACER",
  FRAME_FIGHTER: "  FRAME_FIGHTER",
  FRAME_FRIGATE: "  FRAME_FRIGATE",
  FRAME_SHUTTLE: "  FRAME_SHUTTLE",
  FRAME_EXPLORER: "  FRAME_EXPLORER",
  FRAME_MINER: "  FRAME_MINER",
  FRAME_LIGHT_FREIGHTER: "  FRAME_LIGHT_FREIGHTER",
  FRAME_HEAVY_FREIGHTER: "  FRAME_HEAVY_FREIGHTER",
  FRAME_TRANSPORT: "  FRAME_TRANSPORT",
  FRAME_DESTROYER: "  FRAME_DESTROYER",
  FRAME_CRUISER: "  FRAME_CRUISER",
  FRAME_CARRIER: "  FRAME_CARRIER"
} as const

const ReactorSymbols = {
  REACTOR_SOLAR_I: "REACTOR_SOLAR_I",
  REACTOR_FUSION_I: "REACTOR_FUSION_I",
  REACTOR_FISSION_I: "REACTOR_FISSION_I",
  REACTOR_CHEMICAL_I: "REACTOR_CHEMICAL_I",
  REACTOR_ANTIMATTER_I: "REACTOR_ANTIMATTER_I"
} as const

const EngineSymbols = {
  ENGINE_IMPULSE_DRIVE_I: "ENGINE_IMPULSE_DRIVE_I",
  ENGINE_ION_DRIVE_I: "  ENGINE_ION_DRIVE_I",
  ENGINE_ION_DRIVE_II: "  ENGINE_ION_DRIVE_II",
  ENGINER_HYPER_DRIVE_I: "  ENGINER_HYPER_DRIVE_I"
} as const

const ModuleSymbols = {
  MODULE_MINERAL_PROCESSOR_I: "MODULE_MINERAL_PROCESSOR_I",
  MODULE_GAS_PROCESSOR_I: "MODULE_GAS_PROCESSOR_I",
  MODULE_CARGO_HOLD_I: "MODULE_CARGO_HOLD_I",
  MODULE_CARGO_HOLD_II: "MODULE_CARGO_HOLD_II",
  MODULE_CARGO_HOLD_III: "MODULE_CARGO_HOLD_III",
  MODULE_CREW_QUARTERS_I: "MODULE_CREW_QUARTERS_I",
  MODULE_ENVOY_QUARTERS_I: "MODULE_ENVOY_QUARTERS_I",
  MODULE_PASSENGER_CABIN_I: "MODULE_PASSENGER_CABIN_I",
  MODULE_MICRO_REFINERY_I: "MODULE_MICRO_REFINERY_I",
  MODULE_ORE_REFINERY_I: "MODULE_ORE_REFINERY_I",
  MODULE_FUEL_REFINERY_I: "MODULE_FUEL_REFINERY_I",
  MODULE_SCIENCE_LAB_I: "MODULE_SCIENCE_LAB_I",
  MODULE_JUMP_DRIVE_I: "MODULE_JUMP_DRIVE_I",
  MODULE_JUMP_DRIVE_II: "MODULE_JUMP_DRIVE_II",
  MODULE_JUMP_DRIVE_III: "MODULE_JUMP_DRIVE_III",
  MODULE_WARP_DRIVE_I: "MODULE_WARP_DRIVE_I",
  MODULE_WARP_DRIVE_II: "MODULE_WARP_DRIVE_II",
  MODULE_WARP_DRIVE_III: "MODULE_WARP_DRIVE_III",
  MODULE_SHIELD_GENERATOR_I: "MODULE_SHIELD_GENERATOR_I",
  MODULE_SHIELD_GENERATOR_II: "MODULE_SHIELD_GENERATOR_II"
} as const

const MountSymbols = {
  MOUNT_GAS_SIPHON_I: "MOUNT_GAS_SIPHON_I",
  MOUNT_GAS_SIPHON_II: "MOUNT_GAS_SIPHON_II",
  MOUNT_GAS_SIPHON_III: "MOUNT_GAS_SIPHON_III",
  MOUNT_SURVEYOR_I: "MOUNT_SURVEYOR_I",
  MOUNT_SURVEYOR_II: "MOUNT_SURVEYOR_II",
  MOUNT_SURVEYOR_III: "MOUNT_SURVEYOR_III",
  MOUNT_SENSOR_ARRAY_I: "MOUNT_SENSOR_ARRAY_I",
  MOUNT_SENSOR_ARRAY_II: "MOUNT_SENSOR_ARRAY_II",
  MOUNT_SENSOR_ARRAY_III: "MOUNT_SENSOR_ARRAY_III",
  MOUNT_MINING_LASER_I: "MOUNT_MINING_LASER_I",
  MOUNT_MINING_LASER_II: "MOUNT_MINING_LASER_II",
  MOUNT_MINING_LASER_III: "MOUNT_MINING_LASER_III",
  MOUNT_LASER_CANNON_I: "MOUNT_LASER_CANNON_I",
  MOUNT_MISSILE_LAUNCHER_I: "MOUNT_MISSILE_LAUNCHER_I",
  MOUNT_TURRET_I: "MOUNT_TURRET_I"
} as const

const DepositSymbols = {
  QUARTZ_SAND: "QUARTZ_SAND",
  SILICON_CRYSTALS: "SILICON_CRYSTALS",
  PRECIOUS_STONES: "PRECIOUS_STONES",
  ICE_WATER: "ICE_WATER",
  AMMONIA_ICE: "AMMONIA_ICE",
  IRON_ORE: "IRON_ORE",
  COPPER_ORE: "COPPER_ORE",
  SILVER_ORE: "SILVER_ORE",
  ALUMINUM_ORE: "ALUMINUM_ORE",
  GOLD_ORE: "GOLD_ORE",
  PLATINUM_ORE: "PLATINUM_ORE",
  DIAMONDS: "DIAMONDS",
  URANITE_ORE: "URANITE_ORE",
  MERITIUM_ORE: "MERITIUM_ORE"
} as const

const Items = {
  PRECIOUS_STONES: "PRECIOUS_STONES",
  QUARTZ_SAND: "QUARTZ_SAND",
  SILICON_CRYSTALS: "SILICON_CRYSTALS",
  AMMONIA_ICE: "AMMONIA_ICE",
  LIQUID_HYDROGEN: "LIQUID_HYDROGEN",
  LIQUID_NITROGEN: "LIQUID_NITROGEN",
  ICE_WATER: "ICE_WATER",
  EXOTIC_MATTER: "EXOTIC_MATTER",
  ADVANCED_CIRCUITRY: "ADVANCED_CIRCUITRY",
  GRAVITON_EMITTERS: "GRAVITON_EMITTERS",
  IRON: "IRON",
  IRON_ORE: "IRON_ORE",
  COPPER: "COPPER",
  COPPER_ORE: "COPPER_ORE",
  ALUMINUM: "ALUMINUM",
  ALUMINUM_ORE: "ALUMINUM_ORE",
  SILVER: "SILVER",
  SILVER_ORE: "SILVER_ORE",
  GOLD: "GOLD",
  GOLD_ORE: "GOLD_ORE",
  PLATINUM: "PLATINUM",
  PLATINUM_ORE: "PLATINUM_ORE",
  DIAMONDS: "DIAMONDS",
  URANITE: "URANITE",
  URANITE_ORE: "URANITE_ORE",
  MERITIUM: "MERITIUM",
  MERITIUM_ORE: "MERITIUM_ORE",
  HYDROCARBON: "HYDROCARBON",
  ANTIMATTER: "ANTIMATTER",
  FAB_MATS: "FAB_MATS",
  FERTILIZERS: "FERTILIZERS",
  FABRICS: "FABRICS",
  FOOD: "FOOD",
  JEWELRY: "JEWELRY",
  MACHINERY: "MACHINERY",
  FIREARMS: "FIREARMS",
  ASSAULT_RIFLES: "ASSAULT_RIFLES",
  MILITARY_EQUIPMENT: "MILITARY_EQUIPMENT",
  EXPLOSIVES: "EXPLOSIVES",
  LAB_INSTRUMENTS: "LAB_INSTRUMENTS",
  AMMUNITION: "AMMUNITION",
  ELECTRONICS: "ELECTRONICS",
  SHIP_PLATING: "SHIP_PLATING",
  SHIP_PARTS: "SHIP_PARTS",
  EQUIPMENT: "EQUIPMENT",
  FUEL: "FUEL",
  MEDICINE: "MEDICINE",
  DRUGS: "DRUGS",
  CLOTHING: "CLOTHING",
  MICROPROCESSORS: "MICROPROCESSORS",
  PLASTICS: "PLASTICS",
  POLYNUCLEOTIDES: "POLYNUCLEOTIDES",
  BIOCOMPOSITES: "BIOCOMPOSITES",
  QUANTUM_STABILIZERS: "QUANTUM_STABILIZERS",
  NANOBOTS: "NANOBOTS",
  AI_MAINFRAMES: "AI_MAINFRAMES",
  QUANTUM_DRIVES: "QUANTUM_DRIVES",
  ROBOTIC_DRONES: "ROBOTIC_DRONES",
  CYBER_IMPLANTS: "CYBER_IMPLANTS",
  GENE_THERAPEUTICS: "GENE_THERAPEUTICS",
  NEURAL_CHIPS: "  NEURAL_CHIPS",
  MOOD_REGULATORS: "MOOD_REGULATORS",
  VIRAL_AGENTS: "VIRAL_AGENTS",
  MICRO_FUSION_GENERATORS: "MICRO_FUSION_GENERATORS",
  SUPERGRAINS: "SUPERGRAINS",
  LASER_RIFLES: "LASER_RIFLES",
  HOLOGRAPHICS: "HOLOGRAPHICS",
  SHIP_SALVAGE: "SHIP_SALVAGE",
  RELIC_TECH: "RELIC_TECH",
  NOVEL_LIFEFORMS: "NOVEL_LIFEFORMS",
  BOTANICAL_SPECIMENS: "BOTANICAL_SPECIMENS",
  CULTURAL_ARTIFACTS: "CULTURAL_ARTIFACTS",
  FRAME_PROBE: "FRAME_PROBE",
  FRAME_DRONE: "FRAME_DRONE",
  FRAME_INTERCEPTOR: "FRAME_INTERCEPTOR",
  FRAME_RACER: "FRAME_RACER",
  FRAME_FIGHTER: "FRAME_FIGHTER",
  FRAME_FRIGATE: "FRAME_FRIGATE",
  FRAME_SHUTTLE: "FRAME_SHUTTLE",
  FRAME_EXPLORER: "FRAME_EXPLORER",
  FRAME_MINER: "FRAME_MINER",
  FRAME_LIGHT_FREIGHTER: "FRAME_LIGHT_FREIGHTER",
  FRAME_HEAVY_FREIGHTER: "FRAME_HEAVY_FREIGHTER",
  FRAME_TRANSPORT: "FRAME_TRANSPORT",
  FRAME_DESTROYER: "FRAME_DESTROYER",
  FRAME_CRUISER: "FRAME_CRUISER",
  FRAME_CARRIER: "FRAME_CARRIER",
  REACTOR_SOLAR_I: "REACTOR_SOLAR_I",
  REACTOR_FUSION_I: "REACTOR_FUSION_I",
  REACTOR_FISSION_I: "REACTOR_FISSION_I",
  REACTOR_CHEMICAL_I: "REACTOR_CHEMICAL_I",
  REACTOR_ANTIMATTER_I: "REACTOR_ANTIMATTER_I",
  ENGINE_IMPULSE_DRIVE_I: "ENGINE_IMPULSE_DRIVE_I",
  ENGINE_ION_DRIVE_I: "ENGINE_ION_DRIVE_I",
  ENGINE_ION_DRIVE_II: "ENGINE_ION_DRIVE_II",
  ENGINE_HYPER_DRIVE_I: "ENGINE_HYPER_DRIVE_I",
  MODULE_MINERAL_PROCESSOR_I: "MODULE_MINERAL_PROCESSOR_I",
  MODULE_GAS_PROCESSOR_I: "MODULE_GAS_PROCESSOR_I",
  MODULE_CARGO_HOLD_I: "MODULE_CARGO_HOLD_I",
  MODULE_CARGO_HOLD_II: "MODULE_CARGO_HOLD_II",
  MODULE_CARGO_HOLD_III: "MODULE_CARGO_HOLD_III",
  MODULE_CREW_QUARTERS_I: "MODULE_CREW_QUARTERS_I",
  MODULE_ENVOY_QUARTERS_I: "MODULE_ENVOY_QUARTERS_I",
  MODULE_PASSENGER_CABIN_I: "MODULE_PASSENGER_CABIN_I",
  MODULE_MICRO_REFINERY_I: "MODULE_MICRO_REFINERY_I",
  MODULE_SCIENCE_LAB_I: "MODULE_SCIENCE_LAB_I",
  MODULE_JUMP_DRIVE_I: "MODULE_JUMP_DRIVE_I",
  MODULE_JUMP_DRIVE_II: "MODULE_JUMP_DRIVE_II",
  MODULE_JUMP_DRIVE_III: "MODULE_JUMP_DRIVE_III",
  MODULE_WARP_DRIVE_I: "MODULE_WARP_DRIVE_I",
  MODULE_WARP_DRIVE_II: "MODULE_WARP_DRIVE_II",
  MODULE_WARP_DRIVE_III: "MODULE_WARP_DRIVE_III",
  MODULE_SHIELD_GENERATOR_I: "MODULE_SHIELD_GENERATOR_I",
  MODULE_SHIELD_GENERATOR_II: "MODULE_SHIELD_GENERATOR_II",
  MODULE_ORE_REFINERY_I: "MODULE_ORE_REFINERY_I",
  MODULE_FUEL_REFINERY_I: "MODULE_FUEL_REFINERY_I",
  MOUNT_GAS_SIPHON_I: "MOUNT_GAS_SIPHON_I",
  MOUNT_GAS_SIPHON_II: "MOUNT_GAS_SIPHON_II",
  MOUNT_GAS_SIPHON_III: "MOUNT_GAS_SIPHON_III",
  MOUNT_SURVEYOR_I: "MOUNT_SURVEYOR_I",
  MOUNT_SURVEYOR_II: "MOUNT_SURVEYOR_II",
  MOUNT_SURVEYOR_III: "MOUNT_SURVEYOR_III",
  MOUNT_SENSOR_ARRAY_I: "MOUNT_SENSOR_ARRAY_I",
  MOUNT_SENSOR_ARRAY_II: "MOUNT_SENSOR_ARRAY_II",
  MOUNT_SENSOR_ARRAY_III: "MOUNT_SENSOR_ARRAY_III",
  MOUNT_MINING_LASER_I: "MOUNT_MINING_LASER_I",
  MOUNT_MINING_LASER_II: "MOUNT_MINING_LASER_II",
  MOUNT_MINING_LASER_III: "MOUNT_MINING_LASER_III",
  MOUNT_LASER_CANNON_I: "MOUNT_LASER_CANNON_I",
  MOUNT_MISSILE_LAUNCHER_I: "MOUNT_MISSILE_LAUNCHER_I",
  MOUNT_TURRET_I: "MOUNT_TURRET_I",
  SHIP_PROBE: "SHIP_PROBE",
  SHIP_MINING_DRONE: "SHIP_MINING_DRONE",
  SHIP_SIPHON_DRONE: "SHIP_SIPHON_DRONE",
  SHIP_INTERCEPTOR: "SHIP_INTERCEPTOR",
  SHIP_LIGHT_HAULER: "SHIP_LIGHT_HAULER",
  SHIP_COMMAND_FRIGATE: "SHIP_COMMAND_FRIGATE",
  SHIP_EXPLORER: "SHIP_EXPLORER",
  SHIP_HEAVY_FREIGHTER: "SHIP_HEAVY_FREIGHTER",
  SHIP_LIGHT_SHUTTLE: "SHIP_LIGHT_SHUTTLE",
  SHIP_ORE_HOUND: "SHIP_ORE_HOUND",
  SHIP_REFINING_FREIGHTER: "SHIP_REFINING_FREIGHTER",
  SHIP_SURVEYOR: "SHIP_SURVEYOR"
} as const

export type StatusType = typeof Status[keyof typeof Status]
export type FlightModeType = typeof FlightMode[keyof typeof FlightMode]
export type DestinationType = typeof Destination[keyof typeof Destination]
export type RotationType = typeof Rotation[keyof typeof Rotation]
export type FrameType = typeof Frame[keyof typeof Frame]
export type ReactorSymbolsType = typeof ReactorSymbols[keyof typeof ReactorSymbols]
export type EngineSymbolsType = typeof EngineSymbols[keyof typeof EngineSymbols]
export type ModuleSymbolsType = typeof ModuleSymbols[keyof typeof ModuleSymbols]
export type MountSymbolsType = typeof MountSymbols[keyof typeof MountSymbols]
export type DepositSymbolsType = typeof DepositSymbols[keyof typeof DepositSymbols]
export type ItemsType = typeof Items[keyof typeof Items]