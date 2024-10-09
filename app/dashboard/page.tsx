'use client';
import React from 'react'
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
import { Card, CardContent, Grid } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';
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

  const stats = [
    { icon: <EmojiEmotionsIcon fontSize="large" />, label: 'Happiness', value: '95%' },
    { icon: <FavoriteIcon fontSize="large" />, label: 'Love', value: '100%' },
    { icon: <PetsIcon fontSize="large" />, label: 'Pets', value: '2' },
  ];

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
                    <Typography textAlign={'center'} onClick={() => signOut()}>
                      logout
                    </Typography>
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
           <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Welcome to Your Cute Dashboard!
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#fce4ec',
                borderRadius: '16px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    bgcolor: '#f48fb1',
                    width: 56,
                    height: 56,
                    mb: 2,
                    mx: 'auto',
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {stat.label}
                </Typography>
                <Typography variant="h6" sx={{ color: '#d81b60' }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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
