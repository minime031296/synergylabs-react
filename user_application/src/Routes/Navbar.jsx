import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            My App
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/users">
              Users
            </Button>
            <Button color="inherit" component={Link} to="/singleusers/:id">
              Single User Details
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
