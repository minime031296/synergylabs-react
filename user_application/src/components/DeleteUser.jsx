import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';

const DeleteUser = ({ id }) => {
  // Function to handle user deletion and show notification
  const delUserDetail = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Notify on successful deletion
        toast.success('User details have been deleted!');
      } else {
        // Notify on failure
        toast.error('Failed to delete user details.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('An error occurred while deleting user details.');
    }
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={delUserDetail}>
        Delete User
      </Button>
      <ToastContainer />
    </div>
  );
};

export default DeleteUser;
