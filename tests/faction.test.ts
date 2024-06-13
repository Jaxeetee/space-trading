import { fetchFactions } from '../src/spacetraders-api/faction/faction'
import { Faction } from '../src/interface/faction'

test("faction endpoint", async () =>  {
  const data = await fetchFactions();
  expect(data).toBeInstanceOf( Array<Faction> );
})