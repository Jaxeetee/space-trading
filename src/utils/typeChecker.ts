import { AccountData } from "@/interface/account";
import { ErrorType } from "@/interface/error";
import { Account } from "@/interface/player";

export function isAccountDataType(data: AccountData | ErrorType): data is AccountData {
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

export function isAccountType(data: Account | ErrorType): data is Account {
  return (
    typeof data === 'object' && data !== null &&
    'token' in data && typeof data.token === 'string' &&
    'agent' in data && typeof data.agent === 'object' &&
    'contract' in data && typeof data.contract === 'object' &&
    'faction' in data && typeof data.faction === 'object' &&
    'ship' in data && typeof data.ship === 'object'
  )
}
