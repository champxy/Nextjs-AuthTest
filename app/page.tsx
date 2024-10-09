'use client';
import React, { use, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Face2Icon from '@mui/icons-material/Face2';
import { title } from 'process';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function Page() {
  const { data: session } = useSession();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlerLogout = () => {
    signOut({ callbackUrl: '/', redirect: true });
  }

  React.useEffect(() => {
    document.title = "Login page";
  }, []);


  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Face2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1 }} /> {/* This pushes the login/avatar to the right */}
            {session ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={session.user?.name || ''} src={session.user?.image || ''} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <button onClick={() => handlerLogout()}>
                      Sign Out
                    </button>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Button color="inherit" onClick={() => signIn()}>
                  Login
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {session ?
        <>
          <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Typography textAlign={'center'} variant="h4" component="h1" gutterBottom>
              Welcome {session.user?.name}
            </Typography>
            <Typography textAlign={'center'} variant="h6" component="p" gutterBottom>
              You are now logged in
            </Typography>
          </Container>
        </>
        :
        <>
          <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Typography textAlign={'center'} variant="h4" component="h1" gutterBottom>
              Hi guy this is my test lab auth login page with next-auth leaning by melivecode
            </Typography>
            <Typography textAlign={'center'} variant="h6" component="p" gutterBottom>
              .-.
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
              <img src="https://i.imgur.com/jnae3ML.jpeg" alt="Test Lab" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </Box>
          </Container>
        </>
      }
    </>
  );
}
