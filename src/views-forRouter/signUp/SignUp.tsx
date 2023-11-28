import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  TextField,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

import { AppRoute } from 'AppRoute';

import * as styles from './SignUp.style';

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(true);
  const [hasFirstNameBeenTouched, setHasFirstNameBeenTouched] =
    useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const validateName = (name: string): boolean => /^[a-zA-Z]{3,15}$/.test(name);
  const validateAndSetFirstName = () => {
    const isValidName = validateName(firstName);
    setIsFirstNameValid(isValidName);
  };

  const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    validateAndSetFirstName();
    setHasFirstNameBeenTouched(true);
  };
  return (
    <Box sx={styles.layout}>
      <Paper sx={styles.container}>
        <h1>Sign Up</h1>
        <TextField
          onChange={handleChangeFirstName}
          id="firstName"
          label="First Name*"
          variant="standard"
          error={!isFirstNameValid}
          helperText={
            !isFirstNameValid && hasFirstNameBeenTouched
              ? 'Name should be 3-15 characters long, only letters allowed'
              : ''
          }
        />

        <TextField
          type="text"
          id="lastName"
          label="Last Name*"
          variant="standard"
          // helperText="Incorrect entry."
        />

        <TextField
          type="text"
          id="email"
          label="E-mail*"
          variant="standard"
          // helperText="Incorrect entry."
        />

        <TextField
          type={showPassword ? 'text' : 'password'}
          id="password"
          label="Password*"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          // helperText="Incorrect entry."
        />

        <TextField
          type={showPassword ? 'text' : 'password'}
          id="repeatPassword"
          label="Repeat Password*"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          // helperText="Incorrect entry."
        />
        <Button
          component={Link}
          to={AppRoute.signUp}
          variant="contained"
          size="large"
          style={{
            backgroundColor: '#D44D01',
            width: 110,
            height: 35,
            marginTop: 10,
          }}
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
