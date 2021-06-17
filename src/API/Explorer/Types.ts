// Thanks to Hugo Martinez for the types

export enum ClaimNFTType {
  FoundingMember = 0,
  AngelInvestor = 1,
  CoFounder = 2,
  Founder = 3,
}

export interface ClaimParams extends SearchParams {
  account?: string[];
  sender?: string[];
  buyer?: string[];
  state?: ClaimNFTType[];
  is_recipient_contract?: boolean;
  asset_id?: string[];
}

export interface SearchParams {
  order?: SortOrder;
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export interface ListingClaim {
  contract: string;
  sender_name: string;
  recipient_name: string;
  memo: string;
  is_sender_contract: boolean;
  is_recipient_contract: boolean;
  updated_at_block: number;
  updated_at_time: number;
  created_at_block: number;
  created_at_time: number;
}
