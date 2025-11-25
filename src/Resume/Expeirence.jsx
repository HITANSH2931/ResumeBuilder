import { PlusIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { addExperience } from '../Redux/Resume';
import SavedExperience from './SavedExperience';
import axios from 'axios';
import { toast } from 'react-toastify';
import BASE_URL from '../config';

const Expeirence = ({id}) => {

    const[edit,setEdit] = useState(false);

    const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange'})
    const dispatch = useDispatch();
    const[send,setSend] = useState(false);

    const token   = useSelector((state)=> state.auth.user.token);

    const SubmitData = async (data) => {

      setSend(true);

       try{

          const response = await axios.post(`${BASE_URL}/addExperience`,{
            ...data
          },{
            headers:{
              Authorization:`Bearer ${token}`
            },

            params:{
              id:id
            }
          })

          console.log("response",response.data) 
          dispatch(addExperience({id,exp:{...response.data}}));
          toast.success("Saved Successfully",{
                          className:'text-gray-700 font-semibold text-[14px]'
                      })
       }

       catch(error){

        console.log(error);
       }
 

        finally{
        setEdit(false);
        setSend(false);
        reset()
        }
        
    }

  return (
    <div>

        <div className='flex items-center justify-between'>
            
            <div>
            <h1 className='text-black font-bold text-xl'>Personal Experience</h1>
            <p className='text-gray-700 text-[13px]'>Add your job experience</p>
            </div>

            <div className='flex gap-1 bg-blue-100 hover:bg-blue-200 text-blue-500 px-2 py-1 rounded-lg'>
                <PlusIcon width={18} onClick={() => setEdit(!edit)}/>
                <button className='text-black text-[14px] font-semibold'>Add Experience</button>
            </div>
              
            </div>

            
            <SavedExperience id={id}/>

            {edit && <form onSubmit={handleSubmit(SubmitData)} className='grid grid-cols-2 mt-8 gap-6'>

                <strong className='text-black col-span-2 text-center'>Add Experience</strong>

               <div className='flex flex-col gap-1'>
               
                <input type="text" placeholder='Company name' className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'
                {...register('companyName',{required:'Company Name is required'})}
                />

               {errors.companyName && <p className='text-red-600 text-[13px] pl-1.5'>{errors.companyName.message}</p>}

             </div>

                <div className='flex flex-col gap-1'>

                <input type="text" placeholder='Job Title' className=' text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'
                {...register('title',{required:'Job Title is required'})}
                />

                {errors.title && <p className='text-red-600 text-[13px] pl-1.5'>{errors.title.message}</p>}

                </div>

                <div className='flex flex-col gap-1'>
                <input type="date" className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'
                  {...register('startDate',{required:'Start Date is required'})}
                />

                {errors.startDate && <p className='text-red-600 text-[13px] pl-1.5'>{errors.startDate.message}</p>}

                </div>

                <div className='flex flex-col gap-1'>

                <input type="date"  className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'
                  {...register('endDate',{required:'End Date is required'})}
                />

                {errors.endDate && <p className='text-red-600 text-[13px] pl-1.5'>{errors.endDate.message}</p>}

                </div>
                
               
               <div className='flex flex-col gap-1 col-span-2'>
                <textarea  placeholder='Describe your key responsibility and achievements.....' className='text-[13px] w-full border border-solid border-gray-400 rounded-lg px-2.5 py-2  focus:outline-none h-24 focus:border-2 focus:border-blue-500'
                  {...register('description',{required:'Description is required'})}
                >

                </textarea>

                 {errors.description && <p className='text-red-600 text-[13px] pl-1.5'>{errors.description.message}</p>}

                </div>


                <button disabled={send} className={`text-[14px] ${send ? 'cursor-not-allowed bg-gray-400' :'bg-blue-500 hover:bg-blue-600'} text-white px-2 py-1.5 rounded-lg `}>Save Changes</button>
                <button onClick={() => setEdit(false)} className='text-[14px] bg-red-500 hover:bg-red-600 text-white px-2 py-1.5 rounded-lg'>Cancel</button>
 
                
                </form>}
      
    </div>
  )
}

export default Expeirence
