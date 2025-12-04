import React from 'react'
import { useSelector } from 'react-redux';
import Contact from './Contact';
import Project2 from './Project2';
import Skills2 from './Skills2';
import Summary2 from './Summary2';
import Experience2 from './Experience2';
import Education2 from './Education2';

const PersonalInfo2 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    console.log(id)
    const info = resumeObj.personalInfo;

  return (
    <div>

         <div  hidden={!info} className='flex flex-col  gap-1.5 border-b-2 pb-1.5' style={{borderBottomColor:color}}>
            <strong hidden={!info?.fullName} style={{color:color}} className=' text-3xl font-bold'>{info?.fullName}</strong>

            <p  hidden={!info?.profession} className='text-gray-800 font-semibold text-lg'>{info?.profession}</p>

            </div>


            <div className='grid grid-cols-[35%_60%] mt-14 gap-10'>

                <div className='pr-5'>

                    <Contact info={info} color={color}/>
                    <Project2 id={id} color={color}/>
                    <Skills2 id={id} color={color}/>
                     

                </div>

                <div>

                    <Summary2 info={info} color={color}/>
                    <Experience2 id={id} color={color}/>
                    <Education2 id={id} color={color}/>


                </div>

            </div>
      
    </div>
  )
}

export default PersonalInfo2
