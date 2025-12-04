import React from 'react'
import { useSelector} from 'react-redux';
import Project1 from './Project1';
import Experience1 from './Experience1';
import Skills1 from './Skills1';

const RestInfo = ({id,color}) => {

     const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const educations = resumeObj.education;


  return (
    
        <div className='relative grid grid-cols-2 gap-4 mt-18'>

         <div
          className="absolute top-0 bottom-0 w-0.5"
          style={{ left: "50%", backgroundColor: color }}
         />    

        <div  className='flex flex-col gap-10'>
        
        <div hidden={!educations} className='flex flex-col gap-4.5'>

               <strong style={{color:color,borderBottomColor:color}} className=' text-xl font-semibold w-fit border-b-2 pb-1.5'>Education</strong>
               
                   {educations?.map((e,index) =>(
                
               <div className='flex flex-col gap-0.5 text-[15px] mt-2.5 ' key={index}>

                 <p className='text-gray-700 font-bold'>{e.degree} in  {e.fieldOfStudy}</p>
                 <p className='text-gray-700 font-semibold text-[14px]'>{e.instituteName}</p>

                 <div className='flex items-center gap-2'>
                 <p className='text-gray-700 font-semibold text-[14px]'>{e.startDate} - {e.endDate}</p>
                 <p className='text-gray-700 font-semibold text-[14px] border-l-2 pl-2'>{e.percentage}</p>
                 </div>
               </div>

                   ))}  
   
       </div>

         <Project1 id={id} color={color}/>


       </div>

       <div className='pl-4 flex flex-col gap-10' >

        <Experience1 id={id} color={color}/>
        <Skills1 id={id} color={color}/>

          
       </div>

       </div>


      
    
  )
}

export default RestInfo
