import React, { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

const Allroutes = () => {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default Allroutes;