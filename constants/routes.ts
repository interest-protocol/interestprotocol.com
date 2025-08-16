export enum RoutesEnum {
  Swap = 'swap',
  Pool = 'pools',
  Portfolio = 'portfolio',
  CreateToken = 'create-token',
  DCA = 'dca',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Swap]: '/',
  [RoutesEnum.Pool]: '/pool',
  [RoutesEnum.Portfolio]: '/portfolio',
  [RoutesEnum.CreateToken]: '/create-token',
  [RoutesEnum.DCA]: '/dca',
};

export const NavItemsTitle: Record<RoutesEnum, string> = {
  [RoutesEnum.Swap]: 'Swap',
  [RoutesEnum.Pool]: 'Pool',
  [RoutesEnum.Portfolio]: 'Portfolio',
  [RoutesEnum.CreateToken]: 'Create Token',
  [RoutesEnum.DCA]: 'DCA',
};
