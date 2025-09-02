export interface ImageValue {
  url: string;
  alt?: string;
}

export type ValueType = string | number | ImageValue | null | undefined;

export interface CardInfoProps<T extends Record<string, unknown>> {
  width?: string;
  title?: string;
  headers: ReadonlyArray<string>;
  keys: Array<keyof T>;
  values: T;
  isLoading: boolean;
}
