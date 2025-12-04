import { Dot, ListCheck, ToolCase } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';


const Skills2 = ({id,color}) => {

     const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const skills = resumeObj.skills;
     console.log(skills);

  return (

          <div hidden={!skills} className='mt-13 flex flex-col gap-4.5 relative pl-3'>

                  <div className='absolute top-1 -left-6 rounded-full '>
                    <ListCheck className='text-xl ' style={{color:color}}/>
                  </div>

           <div style={{borderLeftColor:color}} className='h-full border-l-2 mt-0.5 absolute top-6 -left-3.5 '></div>
          
        
              <strong style={{color:color,borderBottomColor:color}} className=' text-xl font-semibold w-fit border-b-2 pb-1.5'>Skills</strong>
        
                 <div  className=" text-[15px] text-gray-700 font-semibold flex flex-wrap gap-x-2 gap-y-2.5 ">

                    {skills?.map((skill,index) =>(     
                  
                    <div className='flex' >
                        <Dot width={24} className='text-black' />
                        <p className=' wrap-break-word'>{skill.name}</p>
                   </div> 
                   
                    ))}
            
                 </div>
        
    </div>
      
   
  )
}

export default Skills2
