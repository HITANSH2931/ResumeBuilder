import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {

    const token = useSelector((state) => state.auth.user?.token);
    const verified = useSelector((state) => state.auth.isVerified);
    const navigate = useNavigate();

    console.log(token);

    useEffect(() =>{

        if(!token){

         navigate("/login");
         return;
        }
        if(!verified) {
          
          navigate("/verifyEmail");
          return;

        }


    },[token,verified])

  return <Outlet/>
}

export default PrivateRoute
