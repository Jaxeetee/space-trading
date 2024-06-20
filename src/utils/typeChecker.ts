import { AccountData } from "@/interface/account";
import { ErrorType } from "@/interface/error";

export function isAccountDataType(data: AccountData | ErrorType): data is AccountData {
  console.log(data);
  return (
    typeof data === 'object' && data !== null &&
    'accountId' in data && typeof data.accountId === 'string' &&
    'credits' in data && typeof data.credits === 'number' &&
    'headquarters' in data && typeof data.headquarters === 'string' &&
    'shipCount' in data && typeof data.shipCount === 'number' &&
    'startingFaction' in data && typeof data.startingFaction === 'string' &&
    'symbol' in data && typeof data.symbol === 'string' 
  )
}
