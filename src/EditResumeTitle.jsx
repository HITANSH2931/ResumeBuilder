import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createResume, updateResumeTitle } from './Redux/Resume';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { X } from 'lucide-react';
import BASE_URL from './config';

const EditResumeTitle = ({setEdit,id,setId}) => {

  const[input,setInput] = useState('');
  const token = useSelector((state) => state.auth.user.token);
  const[send,setSend] = useState(false);
  
  const dispatch = useDispatch();

  const handleSubmit = async () =>{

    setSend(true);

    try{

       const response = await axios.post(`${BASE_URL}/updateResume/${input}`,{

       },{
        headers:{

          Authorization:`Bearer ${token}`
        },
        params:{
            id:id
        }
       })

    }

    catch(error){

      console.log(error);

    }

    finally{

      setSend(false);
      setEdit(false);
      setInput('')
      setId(-1);
      dispatch(updateResumeTitle({id,name:input}))
      
    }

  }
  return (
    <div className='flex justify-center items-center fixed inset-0 backdrop-blur-lg'>

        <div className='bg-white/40 rounded-xl flex flex-col gap-6 w-[360px] p-12 shadow-md shadow-gray-400 '>

            <div>
            <div onClick={() => {setEdit(false); setId(-1);}} className='flex justify-end'><X width={20} className='text-gray-500 hover:text-gray-800'/></div>

            <h1 className='text-black font-bold text-xl text-center'>Edit Resume Title</h1>

            </div>

      <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter resume title' className='text-gray-800 w-full border border-solid border-gray-200 focus:outline-none focus:border-2 focus:border-blue-600 px-3 py-2 rounded-lg text-[14px]'/>

            
            <div className='flex flex-col gap-3'>
            <button disabled={send} onClick={() => handleSubmit()} className={`${send ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white px-3 py-2 rounded-lg w-full text-[14px]`}>Update</button>
            </div>

        </div>


      
    </div>
  )
}

export default EditResumeTitle
