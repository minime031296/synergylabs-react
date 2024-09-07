import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ 
        backgroundColor: 'black ', 
        boxShadow: 'none' ,
        opacity: 10
      }}
    >
      <Toolbar
        sx={{ 
          backgroundColor: 'transparent', 
          opacity: 0.7 ,
          backdropFilter:"inherit 30px"
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            My App
          </Typography>
          <div>
            <Button color="black" component={Link} to="/users">
              Users
            </Button>
            <Button color="black" component={Link} to="/newuser">
              <CreateNewUser/>
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
