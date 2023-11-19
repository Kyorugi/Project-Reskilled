import React, { useState, useEffect, ChangeEvent } from 'react';
import { AxiosError } from 'axios';
import { List } from '@mui/material';

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

  const [isVisible, setIsVisible] = useState(true);

  const handleToggleByDivChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newVisibility = e.target.value === 'true';
    setIsVisible(newVisibility);
  };

  return (
    <div>
      {jobsObject.loading && <p>Trwa ładowanie danych...</p>}
      {(jobsObject as any).error && (
        <p>
          Wystąpił błąd podczas ładowania danych:{' '}
          {(jobsObject as any).error.message}
        </p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {jobList?.languages.map((language) => (
          <select
            onChange={handleToggleByDivChange}
            value={isVisible.toString()}
            key={language.jobId}
          >
            <option>{language.name}</option>
            {language.frameworks.map((framework) => (
              <option key={framework.name} label={framework.name}>
                {/* <h3>{framework.name}</h3> */}
                {framework.levels?.map((level) => (
                  <option key={level.name} label={level.name}>
                    {/* <h4>{level.name}</h4> */}
                    {level.projects?.map((project) => (
                      <option key={project.name}>{project.name}</option>
                    ))}
                  </option>
                ))}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};
