import React, { useState, useEffect, ChangeEvent } from 'react';
import { AxiosError } from 'axios';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FaFolderTree } from 'react-icons/fa6';

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
import { NestedList } from './JobListBox';

export const JobsList = () => {
  const jobsObject: UseAxiosResult<jobsList> = useAxios({ url: jobsPublic });

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {jobList?.languages.map((language) => (
          <select key={language.jobId}>
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
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {jobList?.languages.map((language) => (
          <ListItemButton onClick={handleClick} key={language.jobId}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={language.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        ))}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FaFolderTree />
              </ListItemIcon>
              <ListItemText primary="coś" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <NestedList />
    </div>
  );
};
