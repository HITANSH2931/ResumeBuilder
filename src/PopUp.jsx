import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createResume } from './Redux/Resume';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from './config';

const PopUp = ({setClick}) => {

  const[input,setInput] = useState('');
  const token = useSelector((state) => state.auth.user.token);
  const[send,setSend] = useState(false);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () =>{

    let id = -1;

    setSend(true);

    try{

       const response = await axios.post(`${BASE_URL}/createResume/${input}`,{

       },{
        headers:{

          Authorization:`Bearer ${token}`
        }
       })

       id = response.data;
       console.log(id);

    }

    catch(error){

      console.log(error);

    }

    finally{

      setSend(false);
      setClick(false);
      setInput(-1);
      dispatch(createResume({name:input,id:id}));
      navigate("/resume",{state:{id:id}})
    }

  }
  return (
    <div className='flex justify-center items-center fixed inset-0 backdrop-blur-lg z-50'>

        <div className='bg-white/40 rounded-xl flex flex-col gap-6 w-[360px] p-12 shadow-md shadow-gray-400 '>

            <h1 className='text-black font-bold text-xl text-center'>Create a Resume</h1>

            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter resume title' className='text-gray-800 w-full border border-solid border-gray-200 focus:outline-none focus:border-2 focus:border-blue-600 px-3 py-2 rounded-lg text-[14px]'/>

            
            <div className='flex flex-col gap-3 text-[14px]'>
            <button disabled={send} onClick={() => handleSubmit()} className={`${send ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white px-3 py-2 rounded-lg w-full`}>Create Resume</button>
            <button onClick={() => setClick(false)} className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg w-full'>Cancel</button>
            </div>

        </div>


      
    </div>
  )
}

export default PopUp
