import React from 'react'
import { useSelector } from 'react-redux';

const Experience = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const experiences = resumeObj.experience;


  return (

             <div hidden={!experiences} className='mt-8 flex flex-col gap-4.5 '>

               <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Professional Experience</strong>

                {experiences?.map((exp,index) =>(

                <div style={{borderLeftColor:color}} className='border-l-2 border-solid pl-3 mt-2.5'  key={index}>
             
               <div className='flex flex-col gap-0.5 text-[15px] '>

                <div className='flex justify-between items-between'>
                 <p className='text-gray-700 font-bold'>{exp.title}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{exp.startDate} - {exp.endDate}</p>
                </div>

                 <p className='text-gray-700 font-semibold text-[14px]'>{exp.companyName}</p>
                 <p className='text-gray-800 text-[12px] mt-2  wrap-break-word'>{exp.description}</p>
               </div>
                 
            </div>
            
        ))}
     </div>
    
  )
}

export default Experience
