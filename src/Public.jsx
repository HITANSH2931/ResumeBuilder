import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

const Public = () => {

  const token = useSelector((state) => state.auth.user?.token);
  const verified = useSelector((state) => state.auth.isVerified);
  const navigate = useNavigate();

   useEffect(() =>{

      if(token) navigate("/")
     
   },[token])

  return  <Outlet/>
}

export default Public
