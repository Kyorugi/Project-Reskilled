import { useState, useEffect } from 'react';
import axios from 'axios';
import type { AxiosError } from 'axios';

import type { UseAxiosProps, UseAxiosResult } from './useAxios.types';

export const useAxios = <T,>({
  url,
  options = {},
}: UseAxiosProps<T>): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [loading, setLoading] = useState<string | undefined | null>();

  const fetchData = async () => {
    try {
      setLoading('trwa ładowanie danych');
      const response = await axios(url, options);
      setTimeout(() => {
        setData(response.data);
        setLoading(null);
      }, 1000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setTimeout(() => {
          const axiosError = err as AxiosError<T>;
          setError(axiosError);
        }, 1000);
      }
    } finally {
      setTimeout(() => {
        if (data || data == null) setLoading(null);
      }, 1000);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};
