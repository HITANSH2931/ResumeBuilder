import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { updateExperience } from '../Redux/Resume';
import axios from 'axios'
import { toast } from 'react-toastify';
import BASE_URL from '../config';

const EditExp = ({exp,setEdit,id}) => {

  const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange',defaultValues:exp});
  const token = useSelector((state) => state.auth.user.token);
  const dispatch = useDispatch();
  const[send,setSend] = useState(false);

  const SubmitData = async (data) =>{

    setSend(true);

    console.log(data)

     try{
        const response = await axios.put(`${BASE_URL}/updateExperience`,{
          ...data
        },{

          headers:{
            Authorization:`Bearer ${token}`
          }
        })

        console.log(response.data);
        dispatch(updateExperience({id,exp:{...response.data}}))
        toast.success("Saved Successfully",{
                        className:'text-gray-700 font-semibold text-[14px]'
                    })

        
     }

     catch(error){

        console.log(error);
     }

     finally{

      setEdit(-1);
      setSend(false);
      reset();
     }
  }

  return (
    <div>

      <form onSubmit={handleSubmit(SubmitData)} className='grid grid-cols-2 mt-8 gap-6'>

                <strong className='text-black col-span-2 text-center'>Edit Experience</strong>

               <div className='flex flex-col gap-1'>
               
                <input  type="text" placeholder='Company name' className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'
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


                <button disabled={send} className={`text-[14px] ${send ? 'cursor-not-allowed bg-gray-400' :  'bg-green-500 hover:bg-green-600'} text-white px-2 py-1.5 rounded-lg`}>Edit Changes</button>
                <button type='button' onClick={() => setEdit(-1)} className='text-[14px] bg-red-500 hover:bg-red-600 text-white px-2 py-1.5 rounded-lg '>Cancel</button>
 
                
                </form>
      
    </div>
  )
}

export default EditExp
