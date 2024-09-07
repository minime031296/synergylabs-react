import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteUser from './DeleteUser';

const TABLE_HEAD = ["Name", "Username", "Email", "Phone", "Website", "Edit", "Delete"];

const Users = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users data:', error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!Array.isArray(users) || users.length === 0) {
    return <Typography variant="body1" color="textSecondary">No users available</Typography>;
  }

  return (
    <Card sx={{ p: 4 }}>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 600, tableLayout: isSmallScreen ? 'auto' : 'fixed' }}>
          <TableHead>
            <TableRow>
              {TABLE_HEAD.map((head) => (
                <TableCell key={head} sx={{ fontWeight: 'bold' }}>
                  <Typography variant="subtitle1">{head}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(({ id, name, username, email, phone, website }) => (
              <TableRow key={id}>
                <TableCell>
                  <Typography variant="body2">{name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{username}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{phone}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{website}</Typography>
                </TableCell>
                <TableCell>
                  <Link to={`/singleuser/${id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">View User</Button>
                  </Link>
                </TableCell>
                <TableCell>
                  <DeleteUser/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Users;
