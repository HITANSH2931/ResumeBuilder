import { GraduationCap } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const Education2 = ({id,color}) => {

     const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const educations = resumeObj.education;

  return (
   
             <div hidden={!educations} className='mt-13 flex flex-col gap-4.5 relative pl-3'>

                 <div className='absolute top-1 -left-6 rounded-full '>
                  <GraduationCap className='text-xl ' style={{color:color}}/>
                </div>

              <div style={{borderLeftColor:color}} className='h-full border-l-2 mt-0.5 absolute top-6 -left-3.5 '></div>
          


               <strong style={{color:color,borderBottomColor:color}} className=' text-xl font-semibold w-fit border-b-2 pb-1.5'>Education</strong>

                {educations?.map((e,index) =>(
               
               <div className='flex flex-col gap-0.5 text-[15px] mt-2.5' key={index}>

                <div className='flex justify-between items-between'>
                 <p className='text-gray-700 font-bold'>{e.degree} in {e.fieldOfStudy}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{e.startDate} - {e.endDate}</p>
                </div>

                 <p className='text-gray-700 font-semibold text-[14px]'>{e.instituteName}</p>
                 <p className='text-gray-700 font-semibold text-[14px] mt-2'>{e.percentage}</p>
               </div>

                ))}
                 
            </div>
        

  )
}

export default Education2
