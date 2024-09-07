import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ 
        backgroundColor: 'black', 
        boxShadow: 'none',
        opacity: 1
      }}
    >
      <Toolbar
        sx={{ 
          backgroundColor: 'transparent', 
          opacity: 0.7,
          backdropFilter: 'blur(10px)'
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            <img src="https://cleanspeak.com/images/blog/User-Mngmt.png" alt="" style={{width:"40px"}}/>
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/users">
              Users
            </Button>
            <Button color="inherit" component={Link} to="/newuser">
              + User
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
