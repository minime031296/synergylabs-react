import React from 'react'
import CreateNewUser from './CreateNewUser'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box display="flex" gap="">
      <img src="https://www.loginradius.com/blog/static/3d1a7f9993b6334444b52ae84a06f852/d3746/user-mngmnt.jpg" alt="" />
      <CreateNewUser/>
    </Box>
  )
}

export default Home
