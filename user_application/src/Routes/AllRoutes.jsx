import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../components/Users'
import SingleUserDetail from '../components/SingleUserDetail'
import CreateNewUser from '../components/CreateNewUser'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path = '/users' element={<Users/>}/>
      <Route path = '/singleuser/:id' element={<SingleUserDetail/>}/>
      <Route path = '/newuser' element={<CreateNewUser/>}/>
    </Routes>
  )
}

export default AllRoutes
