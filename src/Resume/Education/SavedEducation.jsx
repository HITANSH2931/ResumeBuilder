import { Delete, Edit, Trash } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import axios from 'axios'
import EditEduc from './EditEduc';
import { deleteEducation } from '../../Redux/Resume';
import { toast } from 'react-toastify';
import BASE_URL from '../../config';


const SavedEducation = ({id}) => {

    const e = useSelector((state) => state.resume.resume);
    const educ = e.find((e) => e.id == id);
    const educations = educ ? educ.education : undefined;
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user.token)

    const[edit,setEdit] = useState(-1);


    const handleDelete = async (educ) =>{


      try{

        const response = await axios.delete(`${BASE_URL}/deleteEducation`,{

          headers:{
            Authorization:`Bearer ${token}`
          },
          params:{
            id:educ.id
          }
        })

        dispatch(deleteEducation({id,educ:{...educ}}))
         toast.warn("Education Deleted Successfully",{
                        className:'text-gray-700 font-semibold text-[14px]'
                    })

        
      }

      catch(error){

        console.log(error);
      }


    }

  return (
    <div>

       { educations?.map((e) =>(

          <div key={e.id}>
          
            {edit == e.id ? (<EditEduc educ={e} setEdit={setEdit} id={id}/>) : 

            (<div className='grid grid-cols-2 gap-6 mt-4'>

                 <div className='flex items-center justify-between col-span-2'>

                  <strong className='text-black'>Saved Education</strong>

                  <div className='flex gap-4'>

                    <Edit onClick={() => setEdit(e.id)} width={18} className='text-blue-600 hover:text-blue-700'/>
                    <Trash onClick={() => handleDelete(e)} width={18} className='text-red-600 hover:text-red-700'/>
                  </div>
                  
                </div>

                <input value={e.instituteName} type="text" placeholder='Institute Name ' className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none' />
                <input value={e.degree} type="text" placeholder='Degree(Btech,Mtech)' className=' text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'/>
                <input value={e.fieldOfStudy} type="text" placeholder='Field Of Study' className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none' />
                <input value={e.startDate} type="date" className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'  />
                <input  value={e.endDate} type="date"  className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'  />
                <input value={e.percentage} type="text" placeholder='Percentage' className=' text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'/>
              
               

                </div>)}

                </div>
        ))}

        
      
    </div>
  )}

export default SavedEducation

