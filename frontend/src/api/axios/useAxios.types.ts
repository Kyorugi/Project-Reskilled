import type { AxiosError, AxiosRequestConfig } from 'axios';

export interface UseAxiosProps<T> {
  url: string;
  options?: T | AxiosRequestConfig | any;
}

export interface UseAxiosResult<T> {
  data: T | null;
  error: AxiosError<T> | null;
  loading: string | undefined | null;
}
