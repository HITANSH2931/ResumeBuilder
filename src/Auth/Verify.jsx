import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';

const Verify = () => {

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const[message,setMessage] = useState('');
    const[loading,setLoading] = useState(true);

    useEffect(() =>{

        const verifyEmail  = async () =>{

        try{

            const response = await axios.post(`${BASE_URL}/verifyEmail`,{

            },{
                params:{
                    token:token
                }
            })

             
            
            setMessage(response.data);
        }

        catch(error){

            console.log(error);
            setMessage(error.response.data)
            
        }

        finally{

            setLoading(false);
            
        }

    };

    verifyEmail();


    },[]);

  return (
    <div className='min-h-screen bg-black'>

       {!loading ? <h1 className='text-white text-center pt-5 '>{message}</h1>

       : <h1 className='text-white text-center pt-5'>Loading...............</h1>}
      
    </div>
  )
}

export default Verify
