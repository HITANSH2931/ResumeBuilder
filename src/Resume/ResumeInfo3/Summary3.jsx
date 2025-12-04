import React from 'react'
import { useSelector } from 'react-redux';

const Summary3 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const info = resumeObj.personalInfo;

  return (

    
        <div hidden={!info?.summary} className='mt-8 flex '>
              <strong style={{color:color}} className='text-xl font-semibold w-fit'>Summary</strong>
              <p   className=' mt-3.5 text-[12px]  text-gray-800  wrap-break-word'>{info?.summary}</p>
      </div>      
 
    
   
  )
}

export default Summary3
