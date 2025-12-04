import { ArrowRight, Briefcase, ChevronLast, ChevronLeft, ChevronRight, Download, Globe, LayoutTemplate, Linkedin, Mail, Mailbox, MapIcon, MapPin, Palette, Phone, User } from 'lucide-react';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ResumeInfo from './ReusmeInfo/ResumeInfo';
import PersonalInfo from './PersonalInfo';
import Summary from './Summary';
import Expeirence from './Expeirence';
import Education from './Education/Education';
import Project from './Project/Project';
import Skill from './Skills/Skill';
import { useEffect } from 'react';
import { Check } from "lucide-react";
import Template from './Template';
import ResumeInfo1 from './ResumeInfo1/ResumeInfo1';
import ResumeInfo2 from './ResumeInfo2/ResumeInfo2';
import ResumeInfo3 from './ResumeInfo3/ResumeInfo3';


const Resume = () => {

    const location = useLocation();
    const resumeId = location.state?.id;
    const navigate = useNavigate();
    const[width,setWidth] = useState(0);

    const[state,setState] = useState(1);

   const colors =  [
  { name: "Blue", color: "#1D4ED8" },
  { name: "Indigo", color: "#4F46E5" },
  { name: "Purple", color: "#6B21A8" },
  { name: "Green", color: "#15803D" },
  { name: "Red", color: "#B91C1C" },
  { name: "Orange", color: "#C2410C" },
  { name: "Teal", color: "#115E59" },
  { name: "Pink", color: "#BE185D" },
  { name: "Gray", color: "#374151" },
  { name: "Black", color: "#000000" },
  { name: "Yellow", color: "#B45309" },
  { name: "Cyan", color: "#0E7490" },
 
    ]

  const[click,setClick] = useState(false);
  const[color,setColor] = useState("#1D4ED8");

  const[template,setTemplate] = useState(false);
  const[temp,setTemp] = useState(0);

  console.log(temp,"temp");

  


    useEffect(() => {

         setWidth(((state-1)/5)*100);

    },[state])

    const handleNext  =() =>{

        if(state == 6) return;
        setState((prev) => prev+1);
    }

    const handlePrevious = () =>{

        if(state == 1) return;
        setState((prev) => prev-1);

    }

    useEffect(() =>{

        if(!resumeId) navigate("/dashboard");
    },[])

  return (
    <div className='bg-blue-5 grid grid-cols-1 lg:grid-cols-[45%_48%] '>

        <div className='mx-5 sm:ml-10 xl:ml-30 sm:mr-10 mt-20 bg-white border border-gray-300  rounded-lg '>

        <div className='bg-gray-200 w-full'>
        <div className='h-1 rounded-lg transition-all duration-1200 ease-in-out bg-green-500' style={{
         width:`${width}%`,
       }}
        /> 
        </div> 

               <div className='p-8'>

               <div className='flex justify-between items-center flex-wrap gap-y-2 pb-3 mb-4 border-b border-gray-300'>

                <div className='flex gap-2 relative'>

                    <div onClick={() => setTemplate(!template)} className='flex items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg hover:border hover:border-blue-300'>
                    <LayoutTemplate width={16}/>
                    <button className=' text-[14px] font-semibold '>Template</button>
                     </div>


                     {template && <Template value={temp} setTemp={setTemp}/>}

                    <div  onClick={() => setClick(!click)} className='flex items-center gap-1.5  bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg px-3 py-2 hover:border hover:border-purple-300'>
                    <Palette width={16} className='text-purple-600'/>
                    <button  className='text-[14px] font-semibold'>Accent</button>
                     </div>
                   
                   {click && <div className='w-[250px] top-full left-[50%] mt-3.5 absolute shadow-md backdrop-blur-md bg-white shadow-gray-400 rounded-lg p-3 flex flex-wrap gap-4'>

                     {colors.map((c,index)=>(

                        <div key={index} className='flex flex-col items-center gap-1.5'>

                          <div onClick={() => setColor(c.color)} style={{backgroundColor:c.color}} className='flex justify-center items-center w-10 h-10 rounded-full hover:border border-black'>
                            
                            {color ==c.color && <Check width={16} className='text-white'/>}

                          </div>
                          <h1 className='text-[13px] text-gray-500 font-semibold'>{c.name}</h1>
                            
                        </div>
                     ))}


                    </div>}
                </div>

                <div className='flex items-center gap-1 '>

                    <div className='flex items-center gap-1 hover:bg-gray-100 rounded-lg px-3 py-2'>
                    <ChevronLeft width={18} onClick={() => handlePrevious()}/>
                    <p className='text-gray-800 text-[14px] font-bold'>Previous</p>
                    </div>

                    <div className='flex items-center gap-1 hover:bg-gray-100 rounded-lg px-3 py-2'>
                    <p className='text-gray-800 text-[14px] font-bold'>Next</p>
                     <ChevronRight width={18} onClick={() => handleNext()}/>
                     </div>
                    
                </div>

            </div>




           {state === 1 && resumeId && <PersonalInfo id={resumeId}/>}
           {state === 2 && resumeId && <Summary id={resumeId}/>}
           {state === 3 && resumeId &&  <Expeirence id={resumeId}/>}
           {state === 4 && resumeId &&  <Education id={resumeId}/>}
           {state === 5 && resumeId &&  <Project id={resumeId}/>}
           {state === 6 && resumeId &&  <Skill id={resumeId}/>}

        </div>

        </div>


        <div className='mx-5 sm:mx-10 lg:mx-0'>
             
         {resumeId && temp==0 && <ResumeInfo id={resumeId} color={color}/>}
         {resumeId && temp==1 && <ResumeInfo1 id={resumeId} color={color}/>}
         {resumeId && temp==2 && <ResumeInfo2 id={resumeId} color={color}/>}
         {resumeId && temp==3 && <ResumeInfo3 id={resumeId} color={color}/>}

        </div>

        
      
    </div>
  )
}

export default Resume
