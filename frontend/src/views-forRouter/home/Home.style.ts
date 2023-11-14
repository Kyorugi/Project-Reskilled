import { SxProps, Theme } from '@mui/material';

export const layout: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'Grid',
  placeItems: 'center',
};

export const container: SxProps<Theme> = {
  paddingX: 10,
  paddingY: 6,
};

export const buttonsContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 7,
  rowGap: 2,
};
