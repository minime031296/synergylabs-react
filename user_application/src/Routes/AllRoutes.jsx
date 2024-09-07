import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../components/Users'
import SingleUserDetail from '../components/SingleUserDetail'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path = '/users' element={<Users/>}/>
      <Route path = '/singleuser/:id' element={<SingleUserDetail/>}/>
      
    </Routes>
  )
}

export default AllRoutes
