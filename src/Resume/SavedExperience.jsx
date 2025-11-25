import { Delete, Edit, Trash } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import EditExp from './EditExp';
import axios from 'axios'
import { deleteExperience } from '../Redux/Resume';
import { toast } from 'react-toastify';
import BASE_URL from '../config';

const SavedExperience = ({id}) => {

    const exp = useSelector((state) => state.resume.resume);
    const exper = exp.find((e) => e.id == id);
    const experiences = exper ? exper.experience : undefined;
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user.token)

    const[edit,setEdit] = useState(-1);

    console.log(experiences)

    const handleDelete = async (exp) =>{


      try{

        const response = await axios.delete(`${BASE_URL}/deleteExperience`,{

          headers:{
            Authorization:`Bearer ${token}`
          },
          params:{
            id:exp.id
          }
        })

        dispatch(deleteExperience({id,exp:{...exp}})) 
        toast.warn(" Experience Deleted Successfully",{
                        className:'text-gray-700 font-semibold text-[14px]'
                    })


        
      }

      catch(error){

        console.log(error);
      }


    }

  return (
    <div>

       { experiences?.map((exp) =>(

          <div key={exp.id}>
          
            {edit == exp.id ? (<EditExp exp={exp} setEdit={setEdit} id={id}/>) : 

            (<div className='grid grid-cols-2 gap-6 mt-4'>

                 <div className='flex items-center justify-between col-span-2'>

                  <strong className='text-black'>Saved Experience</strong>

                  <div className='flex gap-4'>

                    <Edit onClick={() => setEdit(exp.id)} width={18} className='text-blue-600 hover:text-blue-700'/>
                    <Trash onClick={() => handleDelete(exp)} width={18} className='text-red-600 hover:text-red-700'/>
                  </div>
                  
                </div>

                <input value={exp.companyName} type="text" placeholder='Company name' className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none' />
                <input value={exp.title} type="text" placeholder='Job Title' className=' text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'/>
                <input value={exp.startDate} type="date" className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'  />
                <input  value={exp.endDate} type="date"  className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'  />

                <textarea  value={exp.description} placeholder='Describe your key responsibility and achievements.....' className='text-[13px] w-full border border-solid border-gray-400 rounded-lg px-2.5 py-2  focus:outline-none h-24 focus:border-2 col-span-2 focus:border-blue-500'   >
                </textarea>

                </div>)}

                </div>
        ))}

        
      
    </div>
  )}

export default SavedExperience
