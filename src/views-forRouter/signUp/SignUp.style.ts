import { styled, type SxProps, type Theme } from '@mui/material';

export const layout: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'Grid',
  placeItems: 'center',
};

export const container: SxProps<Theme> = {
  paddingX: 10,
  paddingY: 6,
  display: 'flex',
  flexDirection: 'column',
};
