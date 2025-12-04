import React from 'react'
import { useSelector } from 'react-redux';

const Experience3 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const experiences = resumeObj.experience;


  return (

             <div   hidden={!experiences}  className='mt-8 flex '>

               <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Professional Experience</strong>     
            
               <div className='flex flex-col gap-2' >

                {experiences?.map((exp,index) =>(
               
               <div className='flex flex-col gap-0.5 text-[15px] mt-2.5' key={index}>

                <div className='flex justify-between items-center '>
                 <p className='text-gray-700 font-bold'>{exp.title}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{exp.startDate} - {exp.endDate}</p>
                </div>

                 <p className='text-gray-700 font-semibold text-[14px]'>{exp.companyName}</p>
                 <p className='text-gray-800 text-[12px] mt-2  wrap-break-word'>{exp.description}</p>
               </div>

                ))}

               
               </div>
                 
            </div>
            
       
    
    
  )
}

export default Experience3
