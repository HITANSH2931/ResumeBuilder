import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config';

const VerifyEmail = () => {

    const[seconds,setSeconds] = useState(0);
    const[minutes,setMinutes] = useState(0);
    const[send,setSend] = useState(false);

    const email = useSelector((state) => state.auth.user.email);
    const verified = useSelector((state) => state.auth.isVerified)
    const navigate = useNavigate();
    const[message,setMessage] = useState('');


    useEffect(() =>{

        if(verified) navigate("/")
    })
    

    useEffect(() =>{
  
        if(seconds == 0 && minutes == 0) return;

        if(seconds == 0){

            setSeconds(59);
            setMinutes((prev) => prev-1)
        }

        const timeout =  setTimeout(() =>{

            setSeconds((prev) => prev-1);

        },1000);

        return () => clearTimeout(timeout);


    },[seconds,minutes]);

    const handleSubmit = async () =>{

        setSend(true);

        setSeconds(59);
        setMinutes(9)

        try{

            const response =  await axios.post(`${BASE_URL}/verify`,{

            },{
                params:{
                    email:email
                }
            })
        }

        catch(error){

            console.log(error);
            setMessage(error.response.data);
            setTimeout(() => setMessage(''),3000);
            setTimeout(() => navigate("/"),3000);
        }

        finally{

        setSend(false);
        }
    }

  return (
    <div className='flex justify-center items-center h-[700px]'>

        <div className='max-w-sm w-full shadow-[0_0_10px_gray] p-12 flex flex-col items-center gap-6'>

           {message && <p className='bg-pink-400 text-white text-center text-[14px] p-2.5 rounded-lg'>{message}</p>}


            <div className='flex flex-col gap-2'>
            <h1 className='text-black text-2xl font-semibold text-center'>Verify Email</h1>
            <p className='text-gray-800 text-[13px] mx-2'>An email will be sent to your registered  {email} for verification</p>
            </div>

        
             <div className='flex flex-col gap-2 w-full' >

               <button  onClick={() => handleSubmit()} disabled={minutes!=0 || seconds!=0 || send} className={`p-2 rounded-full w-full text-white  ${minutes !=0 || seconds!=0 ? 'cursor-not-allowed bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}>Send Mail</button>
                <p className={` text-[14px] font-bold text-center ${minutes == 0 && seconds <= 59 ? 'text-red-600' : 'text-gray-800'}`}>
                    
                    {minutes <=0 ? '00' : `0${minutes}`} : {seconds < 10 ? `0${seconds}` : seconds}</p>

            </div>

        </div>
      
    </div>
  )
}

export default VerifyEmail
