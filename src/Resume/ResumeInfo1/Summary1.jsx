import React from 'react'
import { useSelector } from 'react-redux';

const Summary1 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const info = resumeObj.personalInfo;

  return (
    
    <div hidden={!info?.summary}  className='mt-10 flex flex-col gap-4.5'>
              <strong style={{color:color,borderBottomColor:color}} className='text-xl font-semibold w-fit mx-auto border-b-2 pb-1.5 block'>Professional Summary</strong>
              <p  className='text-[12px]  text-gray-800  wrap-break-word text-center'>{info?.summary}</p>

    </div>

  )
}

export default Summary1
