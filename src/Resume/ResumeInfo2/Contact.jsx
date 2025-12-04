import { Contact2, Globe, Layers, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

import React from 'react'

const Contact = ({info,color}) => {
  return (
    <div hidden={!info} className='relative pl-3'>


        <div className='absolute top-1 -left-6 rounded-full '>
             <Contact2 className='text-xl ' style={{color:color}}/>
        </div>

        <div style={{borderLeftColor:color}} className='h-full border-l-2 mt-0.5 absolute top-6 -left-3.5'></div>
          
       
         
          <strong className=' text-xl font-semibold w-ft border-b-2 pb-1.5' style={{color:color,borderBottomColor:color}}>Contact</strong>
         

          <div className='flex flex-col  gap-y-1 mt-5'>
                       
                        <div hidden={!info?.emailAddress} className='flex items-center gap-2 '>
                          
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
          
            
            
                        <div  hidden={!info?.linkedInProfile} className='flex items-center gap-2'>
                           
                                <Linkedin width={13}/> 
                           <a className='text-[13px] text-gray-700 hover:underline ' target='_blank' rel="noopener noreferrer" href={info?.linkedInProfile} >{info?.linkedInProfile}</a>
 
  
                        </div>
            
                        <div  hidden={!info?.personalWebsite} className='flex items-center gap-2'>
                           
                               <Globe width={13}/>
                     <a className='text-[13px] text-gray-700 hover:underline ' target='_blank' rel="noopener noreferrer" href={info?.personalWebsite} >{!info?.personalWebsite}</a>
 
                        </div>

                        </div>
      
    </div>
  )
}

export default Contact
