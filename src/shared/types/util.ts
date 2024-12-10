export type ValueOf<T> = T[keyof T]
export type Maybe<T> = T | null
export type Nullable<T> = Maybe<T>
export type RequiredExcept<T, K extends keyof T> = Required<Omit<T, K>> &
  Partial<Pick<T, K>>
