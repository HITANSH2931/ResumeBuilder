import React from 'react'
import { useSelector } from 'react-redux';

const Summary = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const info = resumeObj.personalInfo;

  return (
    
    <div hidden={!info?.summary} className='mt-8 flex flex-col gap-4.5'>
              <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Professional Summary</strong>
              <p style={{borderLeftColor:color}} className='border-l-2 border-solid  pl-3 text-[12px]  text-gray-800  wrap-break-word'>{info?.summary}</p>
      </div>

  )
}

export default Summary
