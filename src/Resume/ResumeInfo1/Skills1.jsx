import { Dot } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';


const Skills1 = ({id,color}) => {

     const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const skills = resumeObj.skills;
     console.log(skills);

  return (

          <div hidden={!skills} className='flex flex-col gap-4.5'>
        
                   <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Skills</strong>
        
                      <div  className=" text-[15px] text-gray-700 font-semibold flex flex-wrap gap-x-4 gap-y-2.5 ">

                        {skills?.map((skill,index) =>(      
                     
                        <div className='flex'  key={index}>
                        <Dot width={24} className='text-black' />
                        <p className=' wrap-break-word'>{skill.name}</p>
                        </div>

                        ))}
            
                      </div>
        
    </div>
      
   
  )
}

export default Skills1
