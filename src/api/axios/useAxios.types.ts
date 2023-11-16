import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface UseAxiosProps<T> {
  url: string;
  options?: AxiosRequestConfig;
}

export interface UseAxiosResult<T> {
  data: T | null;
  error: AxiosError<T> | null;
  loading: string | undefined | null;
}
