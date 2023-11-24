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
      setData(response.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err);
      }
    } finally {
      setTimeout(() => {
        if (data == null) setLoading(null);
      }, 100);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};
