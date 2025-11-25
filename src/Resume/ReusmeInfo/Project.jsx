import React from 'react'
import { useSelector } from 'react-redux';

const Project = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const projects = resumeObj.project;


  return (
  
            <div hidden={!projects} className='mt-8 flex flex-col gap-4.5 '>

               <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Projects</strong>

                 {projects?.map((p,index) =>(

                <div style={{borderLeftColor:color}} className='border-l-2 border-solid  pl-3 mt-2.5'  key={index}>
             
               <div className='flex flex-col gap-0.5 text-[15px] '>

                <div className='flex justify-between items-between'>
                 <p className='text-gray-700 font-bold'>{p.name}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{p.startDate} - {p.endDate}</p>
                </div>

                 <p className='text-gray-800 text-[12px] mt-2  wrap-break-word'>{p.description}</p>
               </div>

               </div>
                
            
        ))}

         </div>
    
  )
}

export default Project



