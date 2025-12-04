import React ,{ useRef } from 'react'
import { useReactToPrint } from "react-to-print";
import { Download } from 'lucide-react';
import PersonalInfo3 from './PersonalInfo3';
import Education3 from './Education3';
import Experience3 from './Experience3';
import Project3 from './Project3';
import Skills3 from './Skills3';
import Summary from '../Summary';
import Summary3 from './Summary3';


const ResumeInfo3 = ({id,color}) => {

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

        <div className='p-8 w-full '>

        
          <PersonalInfo3 id={id} color={color}/>
           
          <div className='relative'>

        <div style={{borderLeftColor:color}} className='absolute top-0 left-[134px] border-l-2 border-solid h-full'></div>
          
          <Summary3 id={id} color={color}/>
          <Education3 id={id} color={color}/>
          <Experience3 id={id} color={color}/>
          <Project3 id={id} color={color}/>
          <Skills3 id={id} color={color}/>

          </div>
      

        </div>

        </div>

      
    </div>
  )
}

export default ResumeInfo3
