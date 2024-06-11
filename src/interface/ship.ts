import { Coordinate } from "./coordinate";

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
  status: Status;
  flightMode: FlightMode;
}

enum Status {
  IN_TRANSIT,
  IN_ORBIT,
  DOCKED
}

enum FlightMode{
  DRIFT,
  STEALTH,
  CRUISE,
  BURN
}

interface Route {
  destination: Destination;
  origin: Destination;
  departureTime: string; //TODO: Change to date Time string
  arrival: string; //TODO: Change to dateTime string
}




//#region Interfaces for Route
enum DestinationType {
  PLANET,
  GAS_PLANET,
  MOON,
  ORBITAL_STATION,
  JUMP_GATE,
  ASTEROID_FIELD,
  ASTEROID,
  ENGINEERED_ASTEROID,
  ASTEROID_BASE,
  NEBULA,
  DEBRIS_FIELD,
  GRAVITY_WELL,
  ARTIFICIAL_GRAVITY_WELL,
  FUEL_STATION
}

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
enum RotationType{
  STRICT,
  RELAXED
}

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

enum FrameType{
  FRAME_PROBE,
  FRAME_DRONE,
  FRAME_INTERCEPTOR,
  FRAME_RACER,
  FRAME_FIGHTER,
  FRAME_FRIGATE,
  FRAME_SHUTTLE,
  FRAME_EXPLORER,
  FRAME_MINER,
  FRAME_LIGHT_FREIGHTER,
  FRAME_HEAVY_FREIGHTER,
  FRAME_TRANSPORT,
  FRAME_DESTROYER,
  FRAME_CRUISER,
  FRAME_CARRIER
}


//#endregion

//#region -== REACTOR ==-
interface Reactor {
  symbol: ReactorSymbols;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  powerOutput: number;
  requirements: Requirements;
}

enum ReactorSymbols{
  REACTOR_SOLAR_I,
  REACTOR_FUSION_I,
  REACTOR_FISSION_I,
  REACTOR_CHEMICAL_I,
  REACTOR_ANTIMATTER_I
}




//#endregion 

//#region -== ENGINE ==-
interface Engine {
  symbol:EngineSymbols;
  name: string;
  description: string;
  condition: number;
  integrity: number;
  speed: number;
  requirements: Requirements;
}

enum EngineSymbols {
  ENGINE_IMPULSE_DRIVE_I,
  ENGINE_ION_DRIVE_I,
  ENGINE_ION_DRIVE_II,
  ENGINER_HYPER_DRIVE_I
}
//#endregion

//#region -== COOLDOWN ==- 
interface Cooldown{
  shipSymbol: string;
  totalSeconds: number;
  remainingSeconds: number;
  expiration: string; //TODO: Date and Time string type
}
//#endregion

//#region -== MODULES ==- 
interface Module {
  symbol: ModuleSymbols;
  name: string;
  description: string;
  capacity: number;
  requirements: Requirements;
}

enum ModuleSymbols {
  MODULE_MINERAL_PROCESSOR_I,
  MODULE_GAS_PROCESSOR_I,
  MODULE_CARGO_HOLD_I,
  MODULE_CARGO_HOLD_II,
  MODULE_CARGO_HOLD_III,
  MODULE_CREW_QUARTERS_I,
  MODULE_ENVOY_QUARTERS_I,
  MODULE_PASSENGER_CABIN_I,
  MODULE_MICRO_REFINERY_I,
  MODULE_ORE_REFINERY_I,
  MODULE_FUEL_REFINERY_I,
  MODULE_SCIENCE_LAB_I,
  MODULE_JUMP_DRIVE_I,
  MODULE_JUMP_DRIVE_II,
  MODULE_JUMP_DRIVE_III,
  MODULE_WARP_DRIVE_I,
  MODULE_WARP_DRIVE_II,
  MODULE_WARP_DRIVE_III,
  MODULE_SHIELD_GENERATOR_I,
  MODULE_SHIELD_GENERATOR_II
}
//#endregion

//#region -== MOUNTS ==- 
interface Mount {
  symbol: MountSymbols;
  name: string;
  description: string;
  strength: number;
  deposits: Array<DepositSymbols>
  requirements: Requirements;
}

enum MountSymbols {
  MOUNT_GAS_SIPHON_I,
  MOUNT_GAS_SIPHON_II,
  MOUNT_GAS_SIPHON_III,
  MOUNT_SURVEYOR_I,
  MOUNT_SURVEYOR_II,
  MOUNT_SURVEYOR_III,
  MOUNT_SENSOR_ARRAY_I,
  MOUNT_SENSOR_ARRAY_II,
  MOUNT_SENSOR_ARRAY_III,
  MOUNT_MINING_LASER_I,
  MOUNT_MINING_LASER_II,
  MOUNT_MINING_LASER_III,
  MOUNT_LASER_CANNON_I,
  MOUNT_MISSILE_LAUNCHER_I,
  MOUNT_TURRET_I
}

enum DepositSymbols {
  QUARTZ_SAND,
  SILICON_CRYSTALS,
  PRECIOUS_STONES,
  ICE_WATER,
  AMMONIA_ICE,
  IRON_ORE,
  COPPER_ORE,
  SILVER_ORE,
  ALUMINUM_ORE,
  GOLD_ORE,
  PLATINUM_ORE,
  DIAMONDS,
  URANITE_ORE,
  MERITIUM_ORE
}

//#endregion

//#region -== CARGO ==-
export interface Cargo {
  capacity: number;
  units: number;
  inventory: Array<Items>;
}

enum Items{
  PRECIOUS_STONES,
  QUARTZ_SAND,
  SILICON_CRYSTALS,
  AMMONIA_ICE,
  LIQUID_HYDROGEN,
  LIQUID_NITROGEN,
  ICE_WATER,
  EXOTIC_MATTER,
  ADVANCED_CIRCUITRY,
  GRAVITON_EMITTERS,
  IRON,
  IRON_ORE,
  COPPER,
  COPPER_ORE,
  ALUMINUM,
  ALUMINUM_ORE,
  SILVER,
  SILVER_ORE,
  GOLD,
  GOLD_ORE,
  PLATINUM,
  PLATINUM_ORE,
  DIAMONDS,
  URANITE,
  URANITE_ORE,
  MERITIUM,
  MERITIUM_ORE,
  HYDROCARBON,
  ANTIMATTER,
  FAB_MATS,
  FERTILIZERS,
  FABRICS,
  FOOD,
  JEWELRY,
  MACHINERY,
  FIREARMS,
  ASSAULT_RIFLES,
  MILITARY_EQUIPMENT,
  EXPLOSIVES,
  LAB_INSTRUMENTS,
  AMMUNITION,
  ELECTRONICS,
  SHIP_PLATING,
  SHIP_PARTS,
  EQUIPMENT,
  FUEL,
  MEDICINE,
  DRUGS,
  CLOTHING,
  MICROPROCESSORS,
  PLASTICS,
  POLYNUCLEOTIDES,
  BIOCOMPOSITES,
  QUANTUM_STABILIZERS,
  NANOBOTS,
  AI_MAINFRAMES,
  QUANTUM_DRIVES,
  ROBOTIC_DRONES,
  CYBER_IMPLANTS,
  GENE_THERAPEUTICS,
  NEURAL_CHIPS,
  MOOD_REGULATORS,
  VIRAL_AGENTS,
  MICRO_FUSION_GENERATORS,
  SUPERGRAINS,
  LASER_RIFLES,
  HOLOGRAPHICS,
  SHIP_SALVAGE,
  RELIC_TECH,
  NOVEL_LIFEFORMS,
  BOTANICAL_SPECIMENS,
  CULTURAL_ARTIFACTS,
  FRAME_PROBE,
  FRAME_DRONE,
  FRAME_INTERCEPTOR,
  FRAME_RACER,
  FRAME_FIGHTER,
  FRAME_FRIGATE,
  FRAME_SHUTTLE,
  FRAME_EXPLORER,
  FRAME_MINER,
  FRAME_LIGHT_FREIGHTER,
  FRAME_HEAVY_FREIGHTER,
  FRAME_TRANSPORT,
  FRAME_DESTROYER,
  FRAME_CRUISER,
  FRAME_CARRIER,
  REACTOR_SOLAR_I,
  REACTOR_FUSION_I,
  REACTOR_FISSION_I,
  REACTOR_CHEMICAL_I,
  REACTOR_ANTIMATTER_I,
  ENGINE_IMPULSE_DRIVE_I,
  ENGINE_ION_DRIVE_I,
  ENGINE_ION_DRIVE_II,
  ENGINE_HYPER_DRIVE_I,
  MODULE_MINERAL_PROCESSOR_I,
  MODULE_GAS_PROCESSOR_I,
  MODULE_CARGO_HOLD_I,
  MODULE_CARGO_HOLD_II,
  MODULE_CARGO_HOLD_III,
  MODULE_CREW_QUARTERS_I,
  MODULE_ENVOY_QUARTERS_I,
  MODULE_PASSENGER_CABIN_I,
  MODULE_MICRO_REFINERY_I,
  MODULE_SCIENCE_LAB_I,
  MODULE_JUMP_DRIVE_I,
  MODULE_JUMP_DRIVE_II,
  MODULE_JUMP_DRIVE_III,
  MODULE_WARP_DRIVE_I,
  MODULE_WARP_DRIVE_II,
  MODULE_WARP_DRIVE_III,
  MODULE_SHIELD_GENERATOR_I,
  MODULE_SHIELD_GENERATOR_II,
  MODULE_ORE_REFINERY_I,
  MODULE_FUEL_REFINERY_I,
  MOUNT_GAS_SIPHON_I,
  MOUNT_GAS_SIPHON_II,
  MOUNT_GAS_SIPHON_III,
  MOUNT_SURVEYOR_I,
  MOUNT_SURVEYOR_II,
  MOUNT_SURVEYOR_III,
  MOUNT_SENSOR_ARRAY_I,
  MOUNT_SENSOR_ARRAY_II,
  MOUNT_SENSOR_ARRAY_III,
  MOUNT_MINING_LASER_I,
  MOUNT_MINING_LASER_II,
  MOUNT_MINING_LASER_III,
  MOUNT_LASER_CANNON_I,
  MOUNT_MISSILE_LAUNCHER_I,
  MOUNT_TURRET_I,
  SHIP_PROBE,
  SHIP_MINING_DRONE,
  SHIP_SIPHON_DRONE,
  SHIP_INTERCEPTOR,
  SHIP_LIGHT_HAULER,
  SHIP_COMMAND_FRIGATE,
  SHIP_EXPLORER,
  SHIP_HEAVY_FREIGHTER,
  SHIP_LIGHT_SHUTTLE,
  SHIP_ORE_HOUND,
  SHIP_REFINING_FREIGHTER,
  SHIP_SURVEYOR
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