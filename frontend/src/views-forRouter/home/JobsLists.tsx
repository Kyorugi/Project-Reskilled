import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FaFolderTree } from 'react-icons/fa6';

import { useAxios } from 'api/axios/useAxios';
import { jobsPublic } from 'api/links/links';
import { UseAxiosResult } from 'api/axios/useAxios.types';

import { NestedListItemProps, jobsList } from './JobsList.types';

const NestedListItem: React.FC<NestedListItemProps> = ({
  icon,
  itemText,
  nestedItems,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={itemText} />
        {nestedItems &&
          nestedItems.length > 0 &&
          (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ paddingLeft: 6 }}>
        <List component="div" disablePadding sx={{ paddingLeft: 2 }}>
          {nestedItems &&
            nestedItems.map((nestedItem) => (
              <NestedListItem key={nestedItem.itemText} {...nestedItem} />
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
            itemText={language.name}
            nestedItems={language.frameworks.map((framework) => ({
              icon: <FaFolderTree />,
              itemText: framework.name,
              nestedItems: framework.levels?.map((level) => ({
                itemText: level.name,
                nestedItems: level.projects?.map((project) => ({
                  itemText: project.name,
                })),
              })),
            }))}
          />
        ))}
      </List>
    </div>
  );
};
