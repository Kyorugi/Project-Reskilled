import { useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';

import type { UseAxiosProps, UseAxiosResult } from './useAxios.types';

export const useAxios = <T,>({
  url,
  options = {},
}: UseAxiosProps<T>): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios(url, options);
      const { data: responseData } = response;
      setData(responseData);
      setEmailError(false);
      setLoading(false);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<T>;
        if (axiosError.response) {
          setEmailError(true);
          console.error(
            'Error:',
            axiosError.response.status,
            axiosError.response.data,
          );
          setError(axiosError);
        } else {
          console.error('Unknown Error:', err);
          setError(axiosError);
        }
      }
    } finally {
      setTimeout(() => {
        if (data == null) setLoading(false);
      }, 1000);
    }
  }, [url, options, data]);

  return { data, error, loading, fetchData, emailError };
};
