import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Typography, Button } from '@mui/material'; 
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';

const TABLE_HEAD = ["Name", "Username", "Email", "Phone", "Website", "Edit", "Delete"];

const SingleUserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  

  async function fetchUser() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const { name, username, email, phone, website } = user;

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  

  return (
    <>
      <Card sx={{ p: 4, overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth: '600px', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
                  <Typography variant="subtitle1" color="textSecondary">{head}</Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>{name}</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>{username}</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>{email}</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>{phone}</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>{website}</td>
              <td style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
                
                <Button variant="outlined" color="primary" onClick={handleEditOpen}>Edit</Button>
              
              </td>
              <td style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
                <DeleteUser id={id}/>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      {isEditOpen && (
        <EditUser id={id} handleClose={handleEditClose} />
      )}

      
      
    </>
  );
};

export default SingleUserDetail;
