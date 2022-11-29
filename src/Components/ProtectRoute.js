import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component }) => {
    const jwt = localStorage.getItem('accessToken');
    return jwt ? component : <Navigate to='/login' />; 
}

export default PrivateRoute