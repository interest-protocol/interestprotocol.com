export const DAY_IN_MS = 1000 * 60 * 60 * 24;

export enum Network {
  BARDOCK = 'bardock',
  MAINNET = 'mainnet',
  APTOS_TESTNET = 'aptos_testnet',
  MovementMainnet = 'movementMainnet',
}

export const TREASURY =
  '0xba515545b9681def6f170b6a3a533368c3404f2a91e8842150d08ba377aabd34';

export const MAX_NUMBER_INPUT_VALUE = 9000000000000000;

export const LOCAL_STORAGE_VERSION = 'v5';

export const PAGE_SIZE = 50;

export const RPC_URL = {
  [Network.MAINNET]:
    'https://rpc.sentio.xyz/ubhXreFT5WIvDL5f8KGmhOyTBfRpCrhx/movement/v1',
  [Network.MovementMainnet]:
    'https://rpc.sentio.xyz/ubhXreFT5WIvDL5f8KGmhOyTBfRpCrhx/movement/v1',
};

export const INDEXER_URL = {
  [Network.MAINNET]: 'https://indexer.mainnet.movementnetwork.xyz/v1/graphql',
  [Network.MovementMainnet]:
    'https://indexer.mainnet.movementnetwork.xyz/v1/graphql',
};

export const EXPLORER_URL = {
  [Network.MAINNET]: (path: string) =>
    `https://explorer.movementnetwork.xyz/${path}?network=mainnet`,
  [Network.MovementMainnet]: (path: string) =>
    `https://explorer.movementnetwork.xyz/${path}?network=mainnet`,
} as Record<Network, (path: string) => string>;

export const TOAST_DURATION = 10000;

export * from './routes';
