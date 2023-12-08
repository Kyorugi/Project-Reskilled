import type { AxiosError, AxiosRequestConfig } from 'axios';
import React, { SetStateAction } from 'react';

export interface UseAxiosProps<T> {
  url: string;
  options?: AxiosRequestConfig;
}

export interface UseAxiosResult<T> {
  data: T | null;
  error: AxiosError<T> | null;
  loading: string | undefined | null;
  fetchData: () => Promise<void>;
  emailError: boolean;
}
