import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Header from './Header'
import  Dashboard from './Dashboard/DHeader'

const Allroutes = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Allroutes;