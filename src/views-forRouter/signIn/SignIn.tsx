import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppRoute } from 'AppRoute';
import { emailRegex, passwordRegex } from 'common/regexList';
import { useAxios } from 'api/axios/useAxios';

import { SignInPayload } from './SignIn.types';
import * as styles from './SignIn.style';

export const SignIn = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInPayload>();

  const [isRememberChecked, setIsRememberChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRememberChecked(event.target.checked);
  };

  const axiosOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer token',
    },
    data: null as SignInPayload | null,
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const axiosResult = useAxios({
    url: `${apiUrl}/auth/login`,
    options: axiosOptions,
  });

  const {
    error: axiosError,
    fetchData,
    emailError: emailAlreadyExist,
    loading: isLoading,
  } = axiosResult;

  const onSubmit = async (payload: SignInPayload) => {
    axiosOptions.data = payload;
    await fetchData();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={styles.layout}>
      <Paper
        sx={styles.container}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Sign In</h1>

        <TextField
          type="text"
          id="email"
          label="E-mail*"
          variant="standard"
          {...register('email', {
            required: 'This field cannot be empty',
            pattern: {
              value: emailRegex,
              message: 'Please enter a valid email address',
            },
          })}
          error={Boolean(
            !isLoading &&
              (errors.email ||
                (axiosError?.response?.status === 401 &&
                  emailAlreadyExist === true)),
          )}
          helperText={
            !isLoading &&
            (errors.email?.message ||
              (axiosError?.response?.status === 401 &&
                emailAlreadyExist === true))
              ? 'Invalid e-mail adress or password. Please try again'
              : ''
          }
          autoComplete="email"
        />

        <TextField
          type={showPassword ? 'text' : 'password'}
          id="password"
          label="Password*"
          variant="standard"
          {...register('password', {
            required: 'This field cannot be empty',
            pattern: {
              value: passwordRegex,
              message:
                'Password should be 5-15 characters long, no spaces allowed',
            },
          })}
          error={Boolean(
            !isLoading &&
              (errors.password ||
                (axiosError?.response?.status === 401 &&
                  emailAlreadyExist === true)),
          )}
          helperText={
            !isLoading &&
            (errors.password?.message ||
              (axiosError?.response?.status === 401 &&
                emailAlreadyExist === true))
              ? 'Invalid password or adress e-mail. Please try again'
              : ''
          }
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
          autoComplete="new-password"
        />
        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            checked={isRememberChecked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            style={{ width: 20, marginRight: 10 }}
          />
          <span> Remamber me</span>
        </div> */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isRememberChecked}
                onChange={handleChange}
                style={{ color: isRememberChecked ? '#D44D01' : '' }}
              />
            }
            label="Remember me"
          />
        </FormGroup>

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          size="large"
          style={{
            backgroundColor: isLoading ? '#CCCCCC' : '#D44D01',
            width: 110,
            height: 35,
            marginTop: 10,
          }}
        >
          Sign in
        </Button>
        <p>
          Don't have an account?{' '}
          <Link to={`/${AppRoute.signUp}`}>Click here to create one</Link>
        </p>
      </Paper>
    </Box>
  );
};
