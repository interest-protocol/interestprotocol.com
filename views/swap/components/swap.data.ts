export enum SwapMessagesEnum {
  leastOneMove = 'You must have at least 0.01 MOVE on your wallet',
  sameCoin = "You can't swap the same coin",
  greaterThanBalance = "Sell value can't be greater than balance",
  notEnoughToken = 'You do not have enough tokens.',
  insufficientBalance = 'Insufficient balance',
  noMarket = 'Has no market for this coin',
  swapping = 'We are swapping, and you will let you know when it is done',
  swapFailure = 'Your swap failed, please try to increment your slippage and try again or contact the support team',
  swapSuccess = 'Your swap was successfully, and you can check it on the Explorer',
}
