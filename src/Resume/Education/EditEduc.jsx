import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { updateEducation } from '../../Redux/Resume';
import { toast } from 'react-toastify';
import BASE_URL from '../../config';

const EditEduc = ({educ,setEdit,id}) => {

  const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange',defaultValues:educ});
  const token = useSelector((state) => state.auth.user.token);
  const dispatch = useDispatch();
  const[send,setSend] = useState(false);

  const SubmitData = async (data) =>{

    setSend(true);

    console.log(data)

     try{
        const response = await axios.put(`${BASE_URL}/updateEducation`,{
          ...data
        },{

          headers:{
            Authorization:`Bearer ${token}`
          }
        })

        console.log(response.data);
        dispatch(updateEducation({id,educ:{...response.data}}))
         toast.success("Updated Successfully",{
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

                <strong className='text-black col-span-2 text-center'>Edit Education</strong>

                <div className='flex flex-col gap-1'>
               
                <input type="text" placeholder='Institute Name' className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'
                {...register('instituteName',{required:'Institute  Name is required'})}
                />

               {errors.instituteName && <p className='text-red-600 text-[13px] pl-1.5'>{errors.instituteName.message}</p>}

             </div>

                <div className='flex flex-col gap-1'>

                <input type="text" placeholder='Degree(Btech,Mtech)' className=' text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'
                {...register('degree',{required:'Degree is required'})}
                />

                {errors.degree && <p className='text-red-600 text-[13px] pl-1.5'>{errors.degree.message}</p>}

                </div>

                 <div className='flex flex-col gap-1'>

                <input type="text" placeholder='Field Of Study' className=' text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'
                {...register('fieldOfStudy',{required:'Field of Study is required'})}
                />

                {errors.fieldOfStudy && <p className='text-red-600 text-[13px] pl-1.5'>{errors.fieldOfStudy.message}</p>}

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

                 <div className='flex flex-col gap-1'>

                <input type="text" placeholder='CGPA OR GPA' className=' text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'
                {...register('percentage',{required:'CGPA  is required'})}
                />

                {errors.percentage && <p className='text-red-600 text-[13px] pl-1.5'>{errors.percentage.message}</p>}

                </div>


                <button disabled={send} className={`text-[14px] ${send ? 'cursor-not-allowed bg-gray-400' :' bg-green-500 hover:bg-green-600'} text-white px-2 py-1.5 rounded-lg`}>Edit Changes</button>
                <button type='button' onClick={() => setEdit(-1)} className='text-[14px] bg-red-500 hover:bg-red-600 text-white px-2 py-1.5 rounded-lg '>Cancel</button>
 
                
                </form>
      
    </div>
  )
}

export default EditEduc
