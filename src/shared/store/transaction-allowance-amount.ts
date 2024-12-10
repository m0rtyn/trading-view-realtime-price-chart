import { makeVar } from '@apollo/client'

/**  NOTE: This is a reactive variable that stores the amount of an allowed transactions
 * @see {@link https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-allowance-address-address-}
 */
export const transactionAllowanceAmountVar = makeVar<number>(0)
