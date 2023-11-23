import React, { useState, useEffect, ChangeEvent } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FaFolderTree } from 'react-icons/fa6';

import { useAxios } from 'api/axios/useAxios';
import { jobsPublic } from 'api/links/links';
import { UseAxiosResult } from 'api/axios/useAxios.types';

import { jobsList } from './JobsList.types';

interface NestedListItemProps {
  icon?: React.ReactNode;
  primary: string;
  nestedItems?: NestedListItemProps[];
}

const NestedListItem: React.FC<NestedListItemProps> = ({
  icon,
  primary,
  nestedItems,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
        {nestedItems &&
          nestedItems.length > 0 &&
          (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ paddingLeft: 6 }}>
        <List component="div" disablePadding sx={{ paddingLeft: 2 }}>
          {nestedItems &&
            nestedItems.map((nestedItem) => (
              <NestedListItem key={nestedItem.primary} {...nestedItem} />
            ))}
        </List>
      </Collapse>
    </>
  );
};

export const JobsList = () => {
  const jobsObject: UseAxiosResult<jobsList> = useAxios({ url: jobsPublic });

  const jobList = jobsObject.data;

  return (
    <div>
      {jobsObject.loading && <p>Trwa ładowanie danych...</p>}
      {jobsObject.error && (
        <p>
          Wystąpił błąd podczas ładowania danych: {jobsObject.error.message}
        </p>
      )}
      <List
        sx={{
          width: '100%',
          maxWidth: 460,
          bgcolor: 'background.paper',
        }}
        component="nav"
      >
        {jobList?.languages.map((language) => (
          <NestedListItem
            key={language.jobId}
            primary={language.name}
            nestedItems={language.frameworks.map((framework) => ({
              icon: <FaFolderTree />,
              primary: framework.name,
              nestedItems: framework.levels?.map((level) => ({
                primary: level.name,
                nestedItems: level.projects?.map((project) => ({
                  primary: project.name,
                })),
              })),
            }))}
          />
        ))}
      </List>
    </div>
  );
};
