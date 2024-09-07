import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const initialState = {
  Name: "",
  Username: "",
  Email: "",
  Phone: "",
  Website: ""
};

const EditUser = ({ id, handleClose }) => {
  const [newDetails, setNewDetails] = useState(initialState);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.statusText}`);
        }
        const data = await response.json();
        setNewDetails({
          Name: data.name,
          Username: data.username,
          Email: data.email,
          Phone: data.phone,
          Website: data.website,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: newDetails.Name,
          username: newDetails.Username,
          email: newDetails.Email,
          phone: newDetails.Phone,
          website: newDetails.Website,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.statusText}`);
      }

      const updatedUser = await response.json();
      setNewDetails(updatedUser); 
      handleClose(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Edit User Profile</DialogTitle>
      <DialogContent>
        {Object.keys(initialState).map((key) => (
          <TextField
            key={key}
            margin="normal"
            fullWidth
            variant="outlined"
            label={key}
            name={key}
            value={newDetails[key]}
            onChange={handleChange}
            type={key === 'Email' ? 'email' : 'text'}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUser;
