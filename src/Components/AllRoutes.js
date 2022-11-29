import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protect from './ProtectRoute';
import Login from '../Pages/Login'
import Header from './Header'
import  Dashboard from './Dashboard/DHeader'
import Signout from './Signout';
import AllCourses from './Dashboard/AllCourses';
import Users from './Dashboard/Users';

const Allroutes = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Protect component={<Dashboard />}></Protect>} />
          <Route path="/all-course" element={<Protect component={<AllCourses />}></Protect>} />
          <Route path="/users" element={<Protect component={<Users />}></Protect>} />
          <Route path="/signout" element={<Signout/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Allroutes;