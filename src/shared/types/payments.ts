import { BalanceOperation, TransactionType } from '__generated__/graphql'

export type TransactionTypeWithoutError = Omit<TransactionType, 'error'>
export type PaymentListUnionType =
  | TransactionTypeWithoutError[]
  | TransactionType[]
  | BalanceOperation[]
