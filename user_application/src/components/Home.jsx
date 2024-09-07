import React from 'react'
import CreateNewUser from './CreateNewUser'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
    <Box display="flex" gap="">
      <img src="https://www.loginradius.com/blog/static/3d1a7f9993b6334444b52ae84a06f852/d3746/user-mngmnt.jpg" alt="" />
      <CreateNewUser/>
    </Box>
    <Typography textAlign={'center'} variant="h4" mt={4} paragraph> 
        Welcome to the user management 👩‍💻👨‍💻
        Application where you can perform CRUD operations 
        and create new user details for you management.
    </Typography>
    </>
  )
}

export default Home
