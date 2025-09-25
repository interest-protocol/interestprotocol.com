export enum RoutesEnum {
  Swap = 'swap',
  Pool = 'pools',
  Portfolio = 'portfolio',
  PortfolioDetails = 'portfolio-details',
  CreateToken = 'create-token',
  DCA = 'dca',
  Stats = 'stats',
  Bridge = 'bridge',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Swap]: '/',
  [RoutesEnum.Pool]: '/pools',
  [RoutesEnum.Portfolio]: '/portfolio',
  [RoutesEnum.PortfolioDetails]: '/portfolio/details',
  [RoutesEnum.CreateToken]: '/create-token',
  [RoutesEnum.DCA]: '/dca',
  [RoutesEnum.Stats]: '/stats',
  [RoutesEnum.Bridge]: 'https://bridge.movementnetwork.xyz/',
};

export const NavItemsTitle: Record<string, string> = {
  [RoutesEnum.Swap]: 'Swap',
  [RoutesEnum.Pool]: 'Pool',
  [RoutesEnum.Portfolio]: 'Portfolio',
  [RoutesEnum.CreateToken]: 'Create Token',
  [RoutesEnum.DCA]: 'DCA',
  [RoutesEnum.Stats]: 'Stats',
  [RoutesEnum.Bridge]: 'Bridge',
};
