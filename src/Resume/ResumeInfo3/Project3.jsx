import React from 'react'
import { useSelector } from 'react-redux';

const Project3 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const projects = resumeObj.project;


  return (
  
            <div hidden={!projects} className='mt-8 flex'>

               <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Projects</strong>

                
               <div className='flex flex-col gap-2'>

                {projects?.map((p,index) =>(
               
               <div className='flex flex-col gap-0.5 text-[15px] mt-2.5 w-full' key={index}>

                <div className='flex justify-between items-center'>
                 <p className='text-gray-700 font-bold'>{p.name}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{p.startDate} - {p.endDate}</p>
                </div>

                 <p className='text-gray-800 text-[12px] mt-2  wrap-break-word'>{p.description}</p>
               </div>

                ))}


            
               </div>

               
            </div>



  )
}

export default Project3



