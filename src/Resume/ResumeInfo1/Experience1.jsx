import React from 'react'
import { useSelector } from 'react-redux';

const Experience1 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const experiences = resumeObj.experience;


  return (
 
             <div  hidden={!experiences}  className='flex flex-col gap-4.5 '>

               <strong style={{color:color,borderBottomColor:color}} className=' text-xl font-semibold w-fit border-b-2 pb-1.5'>Professional Experience</strong>

                
                
                {experiences?.map((exp,index) =>(
                  
               <div className='flex flex-col gap-0.5 text-[15px] mt-2.5' key={index}>

               
                 <p className='text-gray-700 font-bold'>{exp.title}</p>
                  
                 <div className='flex items-center gap-2'>
                 <p className='text-gray-700 font-semibold text-[14px]'>{exp.companyName}</p>
                 <p className='text-gray-700 font-semibold text-[14px] border-l-2 pl-2'>{exp.startDate} - {exp.endDate}</p>
                 </div>

                 <p className='text-gray-800 text-[12px] mt-2  wrap-break-word'>{exp.description}</p>
               </div>

                ))}
                 
            </div>

        
    
    
  )
}

export default Experience1
