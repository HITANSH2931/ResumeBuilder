import { Briefcase } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const Experience2 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const experiences = resumeObj.experience;


  return (

             <div hidden={!experiences}  className='mt-13 flex flex-col gap-4.5 pl-3 relative'>

                 <div className='absolute top-1 -left-6 rounded-full '>
                  <Briefcase className='text-xl ' style={{color:color}}/>
                </div>

           <div style={{borderLeftColor:color}} className='h-full border-l-2 mt-0.5 absolute top-6 -left-3.5 '></div>
          

               <strong style={{color:color,borderBottomColor:color}} className=' text-xl font-semibold w-fit border-b-2 pb-1.5'>Professional Experience</strong>
            
                 {experiences?.map((exp,index) =>(

               <div className='flex flex-col gap-0.5 text-[15px] mt-2.5' key={index}>

                <div className='flex justify-between items-between'>
                 <p className='text-gray-700 font-bold'>{exp.title}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{exp.startDate} - {exp.endDate}</p>
                </div>

                 <p className='text-gray-700 font-semibold text-[14px]'>{exp.companyName}</p>
                 <p className='text-gray-800 text-[12px] mt-2  wrap-break-word'>{exp.description}</p>
               </div>

                 ))}


        </div>
        
    
  )
}

export default Experience2
