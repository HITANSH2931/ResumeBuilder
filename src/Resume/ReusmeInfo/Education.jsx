import React from 'react'
import { useSelector } from 'react-redux';

const Education = ({id,color}) => {

     const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const educations = resumeObj.education;

  return (
   
             <div hidden={!educations} className='mt-8 flex flex-col gap-4.5 '>

               <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Education</strong>

                 {educations?.map((e,index) =>(

                <div style={{borderLeftColor:color}} className='border-l-2 border-solid  pl-3 mt-2.5'  key={index}>
             
               <div className='flex flex-col gap-0.5 text-[15px] '>

                <div className='flex justify-between items-between'>
                 <p className='text-gray-700 font-bold'>{e.degree} in {e.fieldOfStudy}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{e.startDate} - {e.endDate}</p>
                </div>

                 <p className='text-gray-700 font-semibold text-[14px]'>{e.instituteName}</p>
                 <p className='text-gray-700 font-semibold text-[14px] mt-2'>{e.percentage}</p>
               </div>
                 
            </div>
            
        ))}
       </div>

  )
}

export default Education
