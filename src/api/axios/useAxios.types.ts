import type { AxiosError, AxiosRequestConfig } from 'axios';

export interface UseAxiosProps<T> {
  url: string;
  options?: AxiosRequestConfig;
}

export interface UseAxiosResult<T> {
  data: T | null;
  error: AxiosError<T> | null;
  loading: boolean;
  fetchData: () => Promise<void>;
  emailError: boolean;
}
