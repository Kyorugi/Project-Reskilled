import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';

import { useAxios } from 'api/axios/useAxios';
import { jobsPublic } from 'api/links/links';

export const JobsList = () => {
  const jobsLists = useAxios({ url: jobsPublic as any });

  console.log(jobsLists);

  return (
    <div>
      {jobsLists.loading && <p>Trwa ładowanie danych...</p>}
      {(jobsLists as any).error && (
        <p>
          Wystąpił błąd podczas ładowania danych:{' '}
          {(jobsLists as any).error.message}
        </p>
      )}
      {jobsLists.data && (
        <p>{JSON.stringify((jobsLists.data as any)?.languages[0])}</p>
      )}
    </div>
  );
};
