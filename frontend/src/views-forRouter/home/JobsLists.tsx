import { useState, useEffect } from 'react';

import { useAxios } from 'api/axios/useAxios';
import { jobsPublic } from 'api/links/links';

export const JobsList = () => {
  const jobsLists = useAxios({ url: jobsPublic as any });

  console.log(jobsLists);

  return <div>Hello</div>;
};
