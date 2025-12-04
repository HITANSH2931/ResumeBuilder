import React from 'react'
import { useSelector } from 'react-redux'
import { Briefcase, Dot, Globe, Linkedin, Mail, Mailbox, MapIcon, MapPin, Phone, User } from 'lucide-react';

const PersonalInfo3 = ({id,color}) => {

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    console.log(id)
    const info = resumeObj.personalInfo;


  return (
       <div hidden={!info} style={{borderBottomColor:color}} className='border-b-2 border-solid pb-5' >

            <div  className='flex flex-col items-center gap-2.5'>
            <strong hidden={!info?.fullName} style={{color:color}} className=' text-3xl font-bold text-center block'>{info?.fullName}</strong>

            <p  hidden={!info?.profession} className='text-gray-800 font-semibold text-lg'>{info?.profession}</p>

             </div>

                 <div className='flex flex-wrap justify-center gap-x-4 gap-y-2 mt-3'>
                       
                        <div hidden={!info?.emailAddress} className='flex items-center gap-1 border-r-2 border-gray-700 pr-2'>
                          
                                <Mail width={13}/>
                                  <p className='text-gray-700 text-[13px]'>{info?.emailAddress}</p>
 
                        </div>
            
                        <div hidden={!info?.location} className='flex items-center gap-1 border-r-2 border-gray-700 pr-2'>
                           
                               <MapPin width={13}/>
                                 <p className='text-gray-700 text-[13px]'>{info?.location}</p>
 
                               
                        </div>
            
                        <div  hidden={!info?.phoneNumber} className='flex items-center gap-1 border-r-2 border-gray-700 pr-2'>
                          
                                <Phone width={13}/>
                                  <p className='text-gray-700 text-[13px]'>{info?.phoneNumber}</p>
 

                        </div>
          
            
            
                        <div hidden={!info?.linkedInProfile} className='flex items-center gap-1 border-r-2 border-gray-700 pr-2'>
                           
                                <Linkedin width={13}/> 
                           <a className='text-[13px] text-gray-700 hover:underline ' target='_blank' rel="noopener noreferrer" href={info?.linkedInProfile}>{info?.linkedInProfile}</a>
 
  
                        </div>
            
                        <div hidden={!info?.personalWebsite} className='flex items-center gap-1'>
                           
                               <Globe width={13}/>
                     <a className='text-[13px] text-gray-700 hover:underline ' target='_blank' rel="noopener noreferrer" href={info?.personalWebsite}>{info?.personalWebsite}</a>
 
                        </div>


                        </div>

            </div>
  )
}

export default PersonalInfo3
