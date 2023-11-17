import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';

import { useAxios } from 'api/axios/useAxios';
import { jobsPublic } from 'api/links/links';
import { UseAxiosResult } from 'api/axios/useAxios.types';

import {
  Project,
  Level,
  Framework,
  Language,
  jobsList,
} from './JobsList.types';

export const JobsList = () => {
  const jobsObject: UseAxiosResult<jobsList> = useAxios({ url: jobsPublic });

  const jobList = jobsObject.data;
  console.log(jobsObject);
  console.log(jobList?.languages[1]?.frameworks[0]?.name);

  return (
    <div>
      {jobsObject.loading && <p>Trwa ładowanie danych...</p>}
      {(jobsObject as any).error && (
        <p>
          Wystąpił błąd podczas ładowania danych:{' '}
          {(jobsObject as any).error.message}
        </p>
      )}
      {jobsObject.data && (
        <p>{JSON.stringify((jobsObject.data as any)?.languages[0])}</p>
      )}
    </div>
  );
};
