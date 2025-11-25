import { PlusIcon, X } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill } from '../../Redux/Resume'
import { useState } from 'react'
import axios from 'axios';

const Skill = ({id}) => {

    const dispatch = useDispatch()
    const resume = useSelector((state) => state.resume.resume);
    const resumeObj = resume.find((res) => res.id == id);
    const skillsRedux = resumeObj.skills;

    const token = useSelector((state) => state.auth.user.token);

    const[skills,setSkills] = useState(skillsRedux || [])

    const[send,setSend] = useState(false);

    const handleKeyDown = (e) => {
      
        if(e.key == "Enter"){

           if(skills.find((s) => s.name.toLowerCase() == e.target.value.toLowerCase())){

            e.target.value = ''  
            return;      
        }


           setSkills([...skills,{name:e.target.value}])
           e.target.value = '';
        }

    }

    const handleSaveChanges = async () =>{

      setSend(true);

      try{

         const response = await axios.post("http://localhost:8080/addSkills",{
          skillDtoList:skills

         },{

          headers:{
            Authorization:`Bearer ${token}`
          },
          params:{

            id:id
          }
         })

         dispatch(addSkill({id,skill:response.data}))
      }

      catch(error){

        console.log(error);
      }

      finally{

        setSend(false);
      }


    }

    const handleDelete = (skill) =>{

      const newSkills = skills.filter((s) => s.name != skill.name)
      setSkills(newSkills);

    }


  return (
    <div>

           <div>
            <h1 className='text-black font-bold text-xl'>Skills</h1>
            <p className='text-gray-700 text-[13px]'>Add your Technical and Soft skills</p>
           </div>

           <div className='mt-5 flex gap-2.5'>
            <input onKeyDown={(e) => handleKeyDown(e)} type="text" placeholder='Enter a skill' className=' w-[70%] border border-solid border-gray-400 focus:outline-none focus:border-2 focus:border-blue-500 px-2 py-1.5 rounded-lg text-[14px]'/>
            
            <div onClick={() => handleAddSkill()} className='text-white bg-blue-600 rounded-lg px-4 py-1.5 flex gap-1 font-semibold hover:bg-blue-700'>
            <PlusIcon width={18}/>
            <button className='text-[14px]'>Add</button>
            </div>

           </div>

           <div className='flex flex-wrap gap-2 my-5'>
             {skills.map((skill,i) =>(

                <div className=' flex gap-2.5 bg-blue-100 text-blue-700 rounded-full px-4 py-1'>

                    <p className='text-[14px] font-semibold'>{skill.name}</p>
                    <X onClick={() => handleDelete(skill)} width={14}/>

                </div>    


             ))}
           </div>

           <div className='bg-blue-100 rounded-lg px-3 py-3.5 mt-2.5'>

            <p className='text-blue-800 text-[13px] font-semibold'><strong>Tip:</strong> Add 8-12 relevant skills. Include both technical skills (programming languages, tools) and soft skills (leadership, communication).</p>

           </div>

         
        <button disabled={send} onClick={() => handleSaveChanges()} className={`text-[14px] ${send ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white px-3 py-2 rounded-lg mt-5`}>Save Changes</button>

    </div>
  )
}

export default Skill
