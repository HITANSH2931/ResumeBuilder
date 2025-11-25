import React ,{ useRef } from 'react'
import { useReactToPrint } from "react-to-print";
import PersonalInfo from './PersonalInfo';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Project from './Project';
import { Download } from 'lucide-react';


const ResumeInfo = ({id,color}) => {

  const resumeRef = useRef(null);

    const downloadPDF = useReactToPrint({
    content:() => resumeRef.current, 
    documentTitle: "My-Resume",
    contentRef: resumeRef,
  });

  return (

     <div className='flex flex-col gap-3.5 mt-8'>

      
      <div className='flex justify-end'>
      <div onClick={() => downloadPDF()} className='flex items-center gap-1 w-fit text-blue-700 bg-blue-100 hover:bg-blue-200 px-2 py-1.5 rounded-lg'>

        <Download width={18}/>
        <button className='text-[14px] font-semibold'>Download</button>

      </div>
      </div>

     

    <div className='bg-white border border-gray-100 rounded-md' ref={resumeRef}>

        <div className='p-8 w-full'>

            <PersonalInfo id={id} color={color}/>
            <Summary id={id} color={color}/>
            <Experience id={id} color={color}/>
            <Education id={id} color={color}/>
            <Project id={id} color={color}/>
            <Skills id={id} color={color}/>
      

        </div>

        </div>

      
    </div>
  )
}

export default ResumeInfo
