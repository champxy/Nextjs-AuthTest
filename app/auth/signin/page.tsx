'use client';
import React, { useRef } from 'react';
import { signIn } from 'next-auth/react';
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Grid,
  Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Page() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    signIn('credentials', {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
      redirect: true,
      callbackUrl: '/dashboard'
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 2, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" gutterBottom>
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 2 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              inputRef={usernameRef}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login

            </Button>
            <Typography variant="body2" color="textSecondary" align="center">
              Get username and password 
              <Typography
                component="a"
                marginLeft={1}
                href="https://www.melivecode.com"
                target='_blank'
                sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}
              >
                 Here
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
