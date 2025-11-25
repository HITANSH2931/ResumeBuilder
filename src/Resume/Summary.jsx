import React from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { addSummary } from '../Redux/Resume';
import { toast } from 'react-toastify';
import BASE_URL from '../config';

const Summary = ({id}) => {

  const[send,setSend] = useState(false);
 
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user.token)

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id)
    const summary = resumeObj?.personalInfo?.summary ? resumeObj.personalInfo.summary : "";

    const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange',defaultValues:{summary:summary}});
  
  

  const SubmitData = async (data) =>{

    setSend(true);

    try{

        const response = await axios.post(`${BASE_URL}/summaryInfo`,{
          ...data
        },{

        headers:{
          Authorization:`Bearer ${token}`
        },
        params:{
          id:id
        }}

        )

        dispatch(addSummary({id,summary:data}))
         toast.success("Saved Successfully",{
                        className:'text-gray-700 font-semibold text-[14px]'
                    })

        
    }

    catch(error){

       console.log(error);
    }

      finally{

        setSend(false);
      }


  }

  return (
    <div >

        <form onSubmit={handleSubmit(SubmitData)}>
        <h1 className='text-black font-bold text-xl'>Professional Summary</h1>
        <p className='text-gray-700 text-[13px]'>Add Summary for your resume here</p>

        <div className='flex flex-col gap-1'>
        
        <textarea
         placeholder='Write a compelling professional summary that highlights your key strengths and career objectives…' 
        className='mt-5 w-full px-2.5 py-2 text-gray-950 h-32 text-[13px] border border-solid rounded-lg border-gray-400 focus:outline-none focus:border-2 focus:border-blue-600'
       {...register('summary',{required:'Summary is Required'})}
        >

        </textarea>

        {errors.summary && <p className='text-red-600 text-[13px] pl-1.5'>{errors.summary.message}</p>}

        </div>

        <button disabled={send} className={`text-[14px] ${send ? 'cursor-not-allowed bg-gray-400' :'bg-blue-500 hover:bg-blue-600'} text-white px-3 py-2 rounded-lg mt-5`}>Save Changes</button>
        
        </form>
      
    </div>
  )
}

export default Summary
