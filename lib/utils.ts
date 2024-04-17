export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;
export type PartialInclude<T, K extends keyof T> = Partial<T> &
  Required<Pick<T, K>>;
