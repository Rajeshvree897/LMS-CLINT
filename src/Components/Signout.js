import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";


const Signout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
      let data =  window.localStorage.clear();
      navigate('/login')
      

    },[])

  return (
   <></>
  )
}

export default Signout