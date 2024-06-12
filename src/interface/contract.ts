
enum ContractTypes{
  PROCUREMENT,
  TRANSPORT,
  SHUTTLE
}

export interface Contract {
  id: string;
  factionSymbol: string;
  type: ContractTypes;
  terms: Terms;
  accepted: boolean;
  fulfilled: boolean;
  expiration: Date; 
  deadlineToAccept: Date; 
}

//#region -== TERMS ==-
interface Terms {
  deadline: Date; 
  payment: Payment;
  deliver: Array<Deliver>;
}

interface Payment {
  onAccepted: number;
  onFulfilled: number;
}

interface Deliver {
  tradeSymbol: string;
  destinationSymbol: string;
  unitsRequired: number;
  unitsFulfilled: number;
}
//#endregion