import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/AuthRedux'
import { insertAllResumes } from '../Redux/Resume'
import BASE_URL from '../config'


const Login = () => {

 const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange'})
 const[message,setMessage] = useState('');
 const[send,setSend] = useState(false);
 const token = useSelector((state) => state.auth.user?.token);

 const navigate = useNavigate();

 const dispatch = useDispatch();

   const fetchAllResumes = async (tokenabc) =>{

    

    try{

       const response = await axios.get(`${BASE_URL}/getAllResumesByEmail`,{

         headers:{
          Authorization:`Bearer ${tokenabc}`
         },
  
       })

       dispatch(insertAllResumes(response.data));
       console.log(response.data);
    }

    catch(error){

       console.log(error);
    }


   }

  const SubmitData = async (data) =>{

    setSend(true);

    try{

      const response = await  axios.post(`${BASE_URL}/login`,{
        ...data
      });

      dispatch(login(response.data));
      fetchAllResumes(response.data.token)
      navigate("/verifyEmail")
    }

    catch(error){

      console.log(error);
      setMessage(error.response.data);
      setTimeout(() => setMessage(''),6000);
    }

    finally{

      setSend(false);
      reset();
    }
  }

  return (
    <div className='flex justify-center items-center h-[700px]'>

        <form onSubmit={handleSubmit(SubmitData)} className='max-w-sm w-full shadow-[0_0_10px_gray] p-12 flex flex-col items-center gap-6 rounded-xl'>

            {message && <strong className='text-white bg-pink-400 px-3 py-2.5 rounded-lg w-full text-center text-[14px]'>{message}</strong>}
    
            
            <div className='flex flex-col gap-1'>
            <h1 className='text-black font-semibold text-2xl text-center'>Login</h1>
            <p className='text-gray-800 text-[14px]'>Please login to continue</p>
            </div>

            <div className='flex flex-col gap-1'>

            <div className='border border-solid border-gray-800 rounded-full  px-4 py-2'>
                <FontAwesomeIcon icon={faEnvelope}/>
                <input type="text" placeholder='Email' className='pl-2 focus:outline-none focus:ring-0 text-[15px]'
                {...register('email',{required:'Email is Required'})}
                />
            </div>

             {errors.email && <p className='text-red-600 text-[13px] pl-1.5'>{errors.email.message}</p>}

             </div>

             <div className='flex flex-col gap-1'>

            <div className='border border-solid border-gray-800 rounded-full  px-4 py-2'>
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder='Password' className='pl-2 focus:outline-none focus:ring-0 text-[15px]'
                {...register('password',{required:'Password is Required'})}/>
            </div>

            {errors.password && <p className='text-red-600 text-[13px] pl-1.5'>{errors.password.message}</p>}

            </div>

            <button disabled={send} className={`${send ?'cursor-not-allowed bg-gray-400':'bg-blue-500 hover:bg-blue-600'} text-white p-2 rounded-full w-full `}>Login</button>

            <div className='flex flex-col gap-1 text-[14px]'>

            <p className='text-gray-800'>Dont Have an account ? 
            <Link to="/signUp"><strong className='text-blue-400 hover:text-blue-500 underline pl-1'>Click here</strong></Link></p>

            <Link to="/forgot" className='mx-auto'><strong className='text-blue-400 hover:text-blue-500'>Forgot Password</strong></Link>

            </div>

        </form>
      
    </div>
  )
}

export default Login
