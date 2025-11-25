import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import BASE_URL from '../config';


const SignUp = () => {

  const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange'});
  const[message,setMessage] = useState('');
  const[send,setSend] = useState(false);

  const navigate = useNavigate();

  const SubmitData = async (data) =>{

      setSend(true);

      try{

        const response = await axios.post(`${BASE_URL}/signUp`,{
          ...data
        })
        
        console.log(response.data);
        navigate("/login");
      }

      catch(error){

        console.log(error);
        setMessage(error.response.data);
        setTimeout(() =>setMessage(''),6000);
      }

      finally{

        setSend(false);
        reset();
        
      }
  }

  return (
     <div className='flex justify-center items-center h-[700px]'>
    
            <form onSubmit={handleSubmit(SubmitData)} className='max-w-sm w-full shadow-[0_0_10px_gray] p-12 flex flex-col items-center gap-6 rounded-lg'>

                {message && <strong className='text-white bg-pink-400 px-3 py-2.5 rounded-lg w-full text-center text-[14px]'>{message}</strong>}
    
                <div className='flex flex-col gap-1'>
                <h1 className='text-black font-semibold text-2xl text-center'>Sign up</h1>
                <p className='text-gray-800 text-[14px]'>Please register to continue</p>
                </div>

                <div className='flex flex-col gap-1'>

                  <div className='border border-solid border-gray-800 rounded-full  px-4 py-2'>
                    <FontAwesomeIcon icon={faUser}/>
                    <input type="text" placeholder='Name' className='pl-2 focus:outline-none focus:ring-0 text-[15px]'
                    {...register('name',{required:'Name is required'})}
                    />
                </div>

                 {errors.name && <p className='text-red-600 text-[13px] pl-1.5'>{errors.name.message}</p>}

                 </div>

                <div className='flex flex-col gap-1'>
    
                <div className='border border-solid border-gray-800 rounded-full  px-4 py-2'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <input type="email" placeholder='Email' className='pl-2 focus:outline-none focus:ring-0 text-[15px]'
                     {...register('email',{required:'Email is required'})}
                    />
                </div>

                 {errors.email && <p className='text-red-600 text-[13px] pl-1.5'>{errors.email.message}</p>}

                 </div>
                
                <div className='flex flex-col gap-1'>
    
                <div className='border border-solid border-gray-800 rounded-full  px-4 py-2'>
                    <FontAwesomeIcon icon={faLock} />
                    <input type="password" placeholder='Password' className='pl-2 focus:outline-none focus:ring-0 text-[15px]'
                     {...register('password',{required:'Password is required'})}
                    />
                </div>

                 {errors.password && <p className='text-red-600 text-[13px] pl-1.5'>{errors.password.message}</p>}

                 </div>

    
                <button disabled={send} className={`${send ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white p-2 rounded-full w-full `}>Sign up</button>
    
                <div className='flex flex-col gap-1 text-[14px]'>

                <p className='text-gray-800'>Already Have an account ? 
                <Link to="/login"><strong className='text-blue-400 hover:text-blue-500 underline pl-1'>Click here</strong></Link></p>

            
                </div>
    
            </form>
          
        </div>
  )
}

export default SignUp
