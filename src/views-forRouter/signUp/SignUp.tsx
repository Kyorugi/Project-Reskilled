import { Link } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';

import { AppRoute } from 'AppRoute';

import * as styles from './SignUp.style';

export const SignUp = () => {
  return (
    <Box sx={styles.layout}>
      <Paper sx={styles.container}>
        <h1>Sign Up</h1>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name*"
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name*"
          />

          <input type="text" id="email" name="email" placeholder="E-mail*" />

          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
          />

          <input
            type="text"
            id="repeatPassword"
            name="repeatPassword"
            placeholder="Repeat Password"
          />
        </form>
        <Button
          component={Link}
          to={AppRoute.signUp}
          variant="contained"
          size="large"
          style={{ backgroundColor: '#D44D01', width: 110, height: 35 }}
        >
          Sign up
        </Button>
        <p>
          Already have an account? Then{' '}
          <Link to={AppRoute.signIn}>Sign In</Link>
        </p>
      </Paper>
    </Box>
  );
};
