import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const CreateNewUser = () => {
  const [newDetails, setNewDetails] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });

  const handleChangingValue = (e) => {
    const { name, value } = e.target;
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, username, email, phone, website } = newDetails;

      const createdUser = {
        name,
        username,
        email,
        phone,
        website
      };

      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(createdUser),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      toast('User created successfully');
      setNewDetails({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
      }); 
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(37, 310, 135, 0.15) 0px 0px 0px 1px",
        padding: 4,
        width: "100%",
        backgroundColor: "black"
      }}
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="standard"
        InputLabelProps={{
          sx: {
            color: 'blue', 
          }
        }}
        InputProps={{
          sx: {
            '& input::placeholder': {
              color: 'blue', 
            },
            color: 'white', 
          }
        }}
        sx={{
          mb: 2,
          '& .MuiInput-underline:before': {
            borderBottomColor: 'blue',
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'blue', 
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
          }
        }}
        value={newDetails.name}
        onChange={handleChangingValue}
      />
      <br />
      <TextField
        id="username"
        name="username"
        label="Username"
        variant="standard"
        InputLabelProps={{
          sx: {
            color: 'blue', 
          }
        }}
        InputProps={{
          sx: {
            '& input::placeholder': {
              color: 'blue', 
            },
            color: 'white', 
          }
        }}
        sx={{
          mb: 2,
          '& .MuiInput-underline:before': {
            borderBottomColor: 'blue', // Border color
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'blue', 
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
          }
        }}
        value={newDetails.username}
        onChange={handleChangingValue}
      />
      <br />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="standard"
        InputLabelProps={{
          sx: {
            color: 'blue', 
          }
        }}
        InputProps={{
          sx: {
            '& input::placeholder': {
              color: 'blue', 
            },
            color: 'white',
          }
        }}
        sx={{
          mb: 2,
          '& .MuiInput-underline:before': {
            borderBottomColor: 'blue', 
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'blue', 
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
          }
        }}
        value={newDetails.email}
        onChange={handleChangingValue}
      />
      <br />
      <TextField
        id="phone"
        name="phone"
        label="Phone"
        variant="standard"
        InputLabelProps={{
          sx: {
            color: 'blue', 
          }
        }}
        InputProps={{
          sx: {
            '& input::placeholder': {
              color: 'blue',
            },
            color: 'white',
          }
        }}
        sx={{
          mb: 2,
          '& .MuiInput-underline:before': {
            borderBottomColor: 'blue',
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'blue', 
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'blue', 
          }
        }}
        value={newDetails.phone}
        onChange={handleChangingValue}
      />
      <br />
      <TextField
        id="website"
        name="website"
        label="Website"
        variant="standard"
        InputLabelProps={{
          sx: {
            color: 'blue', 
          }
        }}
        InputProps={{
          sx: {
            '& input::placeholder': {
              color: 'blue', 
            },
            color: 'white',
          }
        }}
        sx={{
          mb: 2,
          '& .MuiInput-underline:before': {
            borderBottomColor: 'blue',
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'blue',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
          }
        }}
        value={newDetails.website}
        onChange={handleChangingValue}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Create New User
      </Button>
    </Box>
  );
};

export default CreateNewUser;
