import { Faction } from "@/interface/faction";
import { global as api } from "../api";

export async function fetchFactions(): Promise<Faction | undefined>
{

  try {
    const response = await api.get('https://api.spacetraders.io/v2/factions');
    return response.data.data;
  }
  catch (err) {
    console.error(err);
  }
}
