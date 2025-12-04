import { Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

const PersonalInfo1 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    console.log(id)
    const info = resumeObj.personalInfo;

  return (
  

        <div hidden={!info}  className='flex justify-between items-center border-b-2 border-solid pb-5' style={{borderBottomColor:color}}>

        <div className='flex flex-col gap-1.5'>
            <h1  hidden={!info?.fullName} style={{color:color,borderBottomColor:color}} className='w-fit text-3xl font-bold border-b-2 border-solid  pb-1.5'>{info?.fullName}</h1>
            <p hidden={!info?.profession} className='text-gray-700 text-[15px]'>{info?.profession}</p>
        </div>

       
                  <div className='flex flex-col  gap-y-1'>
                       
                        <div hidden={!info?.emailAddress} className='flex items-center gap-2'>
                          
                                <Mail width={13}/>
                                  <p className='text-gray-700 text-[13px]'>{info?.emailAddress}</p>
 
                        </div>
            
                        <div hidden={!info?.location} className='flex items-center gap-2'>
                           
                               <MapPin width={13}/>
                                 <p className='text-gray-700 text-[13px]'>{info?.location}</p>
 
                               
                        </div>
            
                        <div hidden={!info?.phoneNumber} className='flex items-center gap-2'>
                          
                                <Phone width={13}/>
                                  <p className='text-gray-700 text-[13px]'>{info?.phoneNumber}</p>
 

                        </div>
          
            
            
                        <div hidden={!info?.linkedInProfile} className='flex items-center gap-2'>
                           
                                <Linkedin width={13}/> 
                           <a className='text-[13px] text-gray-700 hover:underline ' target='_blank' rel="noopener noreferrer" href={info?.linkedInProfile} >{info?.linkedInProfile}</a>
 
  
                        </div>
            
                        <div hidden={!info?.personalWebsite} className='flex items-center gap-2'>
                           
                               <Globe width={13}/>
                     <a className='text-[13px] text-gray-700 hover:underline ' target='_blank' rel="noopener noreferrer" href={info?.personalWebsite} >{info?.personalWebsite}</a>
 
                        </div>


                        </div>

                        </div>
           

  )
}

export default PersonalInfo1
