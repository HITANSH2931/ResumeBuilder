import { Edit, FolderX, PlusIcon, Trash } from 'lucide-react'
import React from 'react'
import PopUp from './PopUp';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditResumeTitle from './EditResumeTitle';
import { deleteResume } from './Redux/Resume';
import axios from 'axios'
import BASE_URL from './config';

const DashBoard = () => {

    const[click,setClick] = useState(false);
    const resumes = useSelector((state) => state.resume.resume);
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.user.token);

    const[edit,setEdit] = useState(false);
    const[id,setId] = useState(-1);
    const[send,setSend] = useState(false);

    const dispatch = useDispatch();


    const handleEditResume = (e,i) =>{

        e.stopPropagation();
        setEdit(true);
        setId(i)
    }
    
    const handleDeleteResume = async (e,id)=>{

      e.stopPropagation();
      dispatch(deleteResume(id))
      setSend(true);

       try{

         const response = await axios.delete(`${BASE_URL}/deleteResume`,{

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
      }

    }

  return (
    <div className='bg-gray-50 h-screen'>

      <div className='border-b border-dashed border-gray-700 pb-5 w-fit mx-10 '>

        <div onClick={() => setClick(true)} className=' mt-10  border bg-white border-black w-fit flex flex-col justify-center items-center gap-1.5 h-[200px] px-10 border-dashed hover:border-indigo-600 rounded-xl shadow-md shadow-gray-100'>
            <PlusIcon className='bg-linear-to-br from-indigo-300 to-indigo-500 rounded-full text-white w-9 h-9 p-2'/>
            <h1 className='text-indigo-600'>Create Resume</h1>
        </div>

        </div>

        {click && <PopUp setClick={setClick}/>}

        <h1 className='text-gray-700 font-bold text-xl mt-10 mb-5 mx-10'>Generated Resumes</h1>

        {resumes.length == 0 && <div className='flex flex-col justify-start items-center mt-10 mx-10'>
        <FolderX className='w-44 h-44 text-gray-700'/>
         <p className='text-[15px] font-gray-700'>No resumes to show</p>
        </div>
        }
        <div className='flex gap-7 flex-wrap mx-10 '>

          <div className='absolute right-0 top-2.5 hidden group-hover:flex gap-2 '>

            <Edit width={18}/>
            <Trash width={18}/>

          </div>

          {resumes.map((resume,index) =>(

            <div onClick={() => navigate("/resume",{state:{id:resume.id}})} key={index} className='relative group flex flex-col justify-center items-center gap-y-2.5 bg-white border border-solid border-purple-600 hover:bg-purple-700 rounded-lg h-[200px] w-[200px] bg-linear-to-br from-purple-100 to-purple-200 transition-all duration-300 hover:scale-105'>

               <div className='absolute right-2.5 top-2 hidden group-hover:flex gap-2'>
               <Edit onClick={(e) => handleEditResume(e,resume.id)} width={15} className='cursor-pointer hover:text-blue-500'/>
              <button disabled={send}><Trash onClick={(e) => handleDeleteResume(e,resume.id)} width={15} className={` ${send?'cursor-not-allowed' :'cursor-pointer'} hover:text-red-500`}/></button>
               </div>
              
              <img src="cv.png" className='h-24 w-24'/>
              <p className='text-[13px] text-purple-800 font-semibold'>{resume.name}</p>


            </div>


          ))}



        </div>


        {edit && <EditResumeTitle setEdit={setEdit}  id={id} setId={setId}/>}

      
    </div>
  )
}

export default DashBoard
