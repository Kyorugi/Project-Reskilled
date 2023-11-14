import { Link } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';

import { AppRoute } from 'AppRoute';

import * as styles from './Home.style';

export const Home = () => {
  return (
    <Box sx={styles.layout}>
      <Paper sx={styles.container}>
        <Typography variant="h1" sx={{ fontWeight: 500 }}>
          HR analytics
        </Typography>
        <Box sx={styles.buttonsContainer}>
          <Button
            component={Link}
            to={AppRoute.home}
            variant="contained"
            size="large"
          >
            Sign In
          </Button>
          <Button
            component={Link}
            to={AppRoute.home}
            variant="contained"
            size="large"
          >
            Sign up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
