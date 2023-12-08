import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppRoute } from 'AppRoute';
import { emailRegex, namesRegex, passwordRegex } from 'common/regexList';
import { useAxios } from 'api/axios/useAxios';

import { SignUpPayload } from './SignUp.types';
import * as styles from './SignUp.style';

export const SignUp = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm<SignUpPayload>();

  // const [emailError, setEmailError] = useState<boolean>(false);

  const axiosOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: null as SignUpPayload | null,
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  const axiosResult = useAxios({
    url: `${apiUrl}/auth/register`,
    options: axiosOptions,
  });

  const {
    error: axiosError,
    fetchData,
    emailError: emailAlreadyExist,
  } = axiosResult;

  const onSubmit = async (payload: SignUpPayload) => {
    const { passwordRepeat, ...payloadWithoutPasswordRepeat } = payload;
    axiosOptions.data = payloadWithoutPasswordRepeat;
    await fetchData();
  };

  useEffect(() => {
    if (axiosError?.response?.status === 409) {
      // setEmailError(true);
    } else {
      // setEmailError(false);
    }

    console.log(emailAlreadyExist);
  }, [axiosResult]);

  const watchPassword = watch('password');
  const watchPasswordRepeat = watch('passwordRepeat');

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
        <h1>Sign Up</h1>
        <TextField
          id="firstName"
          label="First Name*"
          variant="standard"
          {...register('firstName', {
            required: 'This field cannot be empty',
            pattern: {
              value: namesRegex,
              message:
                'Name should be 3-15 characters long, only letters allowed',
            },
          })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
          autoComplete="firstName"
        />

        <TextField
          type="text"
          id="lastName"
          label="Last Name*"
          variant="standard"
          {...register('lastName', {
            required: 'This field cannot be empty',
            pattern: {
              value: namesRegex,
              message:
                'Last Name should be 3-15 characters long, only letters allowed',
            },
          })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
          autoComplete="lastName"
        />

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
            errors.email ||
              (axiosError?.response?.status === 409 &&
                emailAlreadyExist === true),
          )}
          helperText={
            errors.email?.message ||
            (axiosError?.response?.status === 409 && emailAlreadyExist === true
              ? 'e-mail already exist'
              : '')
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
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
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

        <TextField
          type={showPassword ? 'text' : 'password'}
          id="passwordRepeat"
          label="Repeat Password*"
          variant="standard"
          {...register('passwordRepeat', {
            required: 'This field cannot be empty',
            pattern: {
              value: passwordRegex,
              message:
                'Password should be 5-15 characters long, no spaces allowed',
            },
            validate: (value) => value === watchPassword,
          })}
          error={
            Boolean(errors.password) || watchPassword !== watchPasswordRepeat
          }
          helperText={
            errors.password?.message ||
            (watchPassword !== watchPasswordRepeat && 'Passwords do not match')
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
        <Button
          type="submit"
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
