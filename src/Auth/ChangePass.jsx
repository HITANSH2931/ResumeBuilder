import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import BASE_URL from '../config';

const ChangePass = () => {

     const  location = useLocation(); 
     const email = location.state?.email;
     const navigate = useNavigate();

     const{register,handleSubmit,formState:{errors}} = useForm({mode:'onChange'});
    
     const[send,setSend] = useState(false);

     const[data,setData] = useState('');

     const submitForm = async (data) =>{

      setSend(true);

          const response = await axios.post(`${BASE_URL}/changePassword`,{

             email:email,
             password:data.password

          });

      
      setData(response.data);

      setTimeout(()=> setData('') ,3000)
      setTimeout(() => navigate("/") ,4000)
      
      setSend(false);
    }

  return (
    <div className='h-[500px] flex justify-center items-center'>

        <form onSubmit={handleSubmit(submitForm)}className='flex flex-col gap-6 p-6 shadow-[0_0_10px_gray]  max-w-md w-full font-display'>

            <h1 className='text-2xl text-blue-600 font-bold text-center'>Change Password</h1>

              {data && <p className='bg-pink-400 text-white  text-center text-[14px] rounded-lg px-2 py-2'>{data}</p>}

            <div className='flex flex-col gap-1 text-[14px]'>
             <input type="password" 
                placeholder='Password'
                className={`  text-gray-700 border border-solid px-3 py-1.5 ${errors.password ? 'border-red-500' : 'border-gray-800'} focus:outline-none rounded-lg`}
                {...register('password',{required:'Password is required'})}/>

               {errors.password && <p className='text-red-500 text-[13px] ml-2'>{errors.password.message}</p>}

             </div>   
             
            <button disabled ={send} className={` text-white px-3 py-1.5 rounded-lg ${!send ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed'} `}>
              Submit
            </button>
            
        </form>
      
    </div>
  )
}

export default ChangePass  