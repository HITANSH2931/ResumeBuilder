import { Delete, Edit, Trash } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import {deleteProject } from '../../Redux/Resume';
import EditProject from './EditProject';
import BASE_URL from '../../config';


const SavedProject = ({id}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resume = resumes.find((res) => res.id == id);
    const projects = resume ? resume.project : undefined;
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user.token)

    const[edit,setEdit] = useState(-1);


    const handleDelete = async (proj) =>{


      try{

        const response = await axios.delete(`${BASE_URL}/deleteProject`,{

          headers:{
            Authorization:`Bearer ${token}`
          },
          params:{
            id:proj.id
          }
        })

        dispatch(deleteProject({id,proj:{...proj}}))
         toast.warn("Project Deleted Successfully",{
                        className:'text-gray-700 font-semibold text-[14px]'
                    })

        
      }

      catch(error){

        console.log(error);
      }


    }

  return (
    <div>

       { projects?.map((p) =>(

          <div key={p.id}>
          
            {edit == p.id ? (<EditProject proj={p} setEdit={setEdit} id={id}/>) : 

            (<div className='grid grid-cols-2 gap-6 mt-4'>

                 <div className='flex items-center justify-between col-span-2'>

                  <strong className='text-black'>Saved Project</strong>

                  <div className='flex gap-4'>

                    <Edit onClick={() => setEdit(p.id)} width={18} className='text-blue-600 hover:text-blue-700'/>
                    <Trash onClick={() => handleDelete(p)} width={18} className='text-red-600 hover:text-red-700'/>
                  </div>
                  
                </div>

                <input value={p.name} type="text" placeholder='Name' className=' col-span-2 text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none' />
                <textarea value={p.description} type="text" placeholder='Description' className='col-span-2 h-24 text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg focus:outline-none'/>
                 <input value={p.startDate} type="date" className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'  />
                <input  value={p.endDate} type="date"  className='text-[13px] border border-solid border-gray-400 px-3 py-2 rounded-lg'  />
             
               

                </div>)}

                </div>
        ))}

        
      
    </div>
  )}

export default SavedProject
