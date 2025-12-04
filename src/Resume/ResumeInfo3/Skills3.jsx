import { Dot } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';


const Skills3 = ({id,color}) => {

     const resumes = useSelector((state) => state.resume.resume);
     const resumeObj = resumes.find((res) => res.id == id);
     const skills = resumeObj.skills;
     console.log(skills);

  return (

          <div  hidden={!skills} className='mt-8 flex gap-32'>
        
                   <strong style={{color:color}} className=' text-xl font-semibold w-fit'>Skills</strong>
        
                      <div className=" text-[15px] text-gray-700 font-semibold flex flex-wrap gap-x-4.5 gap-y-2.5 mt-2.5 ">
                            
                        {skills?.map((skill,index) =>(

                        <div className='flex' key={index}>
                        <Dot width={24} className='text-black'/>
                        <p className=' wrap-break-word'>{skill.name}</p>
                        </div>

                        ))}
            
                      </div>
        
    </div>
      
   
  )
}

export default Skills3
