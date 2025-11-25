import React from 'react'
import { Briefcase, Globe, Linkedin, Mail, Mailbox, MapIcon, MapPin, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonalInfo } from '../Redux/Resume';
import axios from 'axios';
import { toast } from 'react-toastify'
import BASE_URL from '../config';

const PersonalInfo = ({id}) => {

    const[send,setSend] = useState(false);
    const token = useSelector((state) => state.auth.user.token)
    const dispatch = useDispatch();

    const resumes = useSelector((state) => state.resume.resume);
    const resumeObj = resumes.find((res) => res.id == id);
    const info = resumeObj?.personalInfo?.fullName ? resumeObj.personalInfo : {};
    const{fullName="",emailAddress="",phoneNumber="",location="",profession="",linkedInProfile="",personalWebsite=""} = info;

    const{register,handleSubmit,reset,formState:{errors}} = useForm({mode:'onChange',defaultValues: {
    fullName,
    emailAddress,
    phoneNumber,
    location,
    profession,
    linkedInProfile,
    personalWebsite
  }})
   

    const SubmitData = async (data) =>{

        setSend(true);

        try{

            const response = await axios.post(`${BASE_URL}/personalInfo`,{
                ...data
            },{

                headers:{
                    Authorization:`Bearer ${token}`
                },
                params:{
                    id:id
            }
        })

            dispatch(addPersonalInfo({id,info:data}))
            toast.success("Saved Successfully",{
                className:'text-gray-700 font-semibold text-[14px]'
            })

        }

        catch(error){

            console.log(error);
        }

        finally{

            setSend(false);
          
        }

        
    }

  return (
       <div >

        <form onSubmit={handleSubmit(SubmitData)}>

            <h1 className='text-black font-bold text-xl'>Personal Information</h1>
            <p className='text-gray-700 text-[13px]'>Get Started with the personal information</p>

            <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                    <User width={16}/>
                    <strong className='text-[14px] text-gray-600'>Full Name</strong>
                </div>

                <input type="text" placeholder='Enter your name' className=' text-[14px] px-3 py-2 rounded-lg text-gray-600 border border-solid border-gray-400 focus:outline-none'
                {...register('fullName',{required:'Full Name is required'})}
                />

               
             {errors.fullName && <p className='text-red-600 text-[13px] pl-1.5'>{errors.fullName.message}</p>}


            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                    <Mail width={16}/>
                    <strong className='text-[14px] text-gray-600'>Email Address</strong>
                </div>

                <input type="text" placeholder='Enter your email' className=' text-[14px] px-3 py-2 rounded-lg text-gray-600 border border-solid border-gray-400 focus:outline-none'
                {...register('emailAddress',{required:'Email is required'})}
                />

                 
             {errors.emailAddress && <p className='text-red-600 text-[13px] pl-1.5'>{errors.emailAddress.message}</p>}

            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                   <MapPin width={16}/>
                    <strong className='text-[14px] text-gray-600'>Location</strong>
                </div>

                <input type="text" placeholder='Enter your Location' className=' text-[14px] px-3 py-2 rounded-lg text-gray-600 border border-solid border-gray-400 focus:outline-none'
                 {...register('location',{required:'Location is required'})}
                />

                {errors.location && <p className='text-red-600 text-[13px] pl-1.5'>{errors.location.message}</p>}

            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                    <Phone width={16}/>
                    <strong className='text-[14px] text-gray-600'>Phone Number</strong>
                </div>

                <input type="text" placeholder='Enter your phone number' className=' text-[14px] px-3 py-2 rounded-lg text-gray-600 border border-solid border-gray-400 focus:outline-none'
                 {...register('phoneNumber',{required:'Phone Number is required'})}
                
                />
              
               {errors.phoneNumber && <p className='text-red-600 text-[13px] pl-1.5'>{errors.phoneNumber.message}</p>}


            </div>

             <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                    <Briefcase width={16}/>
                    <strong className='text-[14px] text-gray-600'>Profession</strong>
                </div>

                <input type="text" placeholder='Enter your profession' className=' text-[14px] px-3 py-2 rounded-lg text-gray-600 border border-solid border-gray-400 focus:outline-none'
                   {...register('profession',{required:'Profession is required'})}
                
                />

              {errors.profession && <p className='text-red-600 text-[13px] pl-1.5'>{errors.profession.message}</p>}


            </div>


            <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                    <Linkedin width={16}/> 
                    <strong className='text-[14px] text-gray-600'>Linkedin Profile</strong>
                </div>

                <input type="text" placeholder='Enter your linkedin profile' className=' text-[14px] px-3 py-2 rounded-lg text-gray-600 border border-solid border-gray-400 focus:outline-none'
                 {...register('linkedInProfile',{required:'Linkedin Profile is required'})}
                
                />

                 {errors.linkedInProfile && <p className='text-red-600 text-[13px] pl-1.5'>{errors.linkedInProfile.message}</p>}

            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center gap-2'>
                   <Globe width={16}/>
                    <strong className='text-[14px] text-gray-600'>Personal Website</strong>
                </div>

                <input type="text" placeholder='Enter your personal Website' className=' text-[14px] px-3 py-2 rounded-lg text-gray-600 border border-solid border-gray-400 focus:outline-none'
                {...register('personalWebsite',{required:'Personal Website Url is required'})}
                
                />

              {errors.personalWebsite && <p className='text-red-600 text-[13px] pl-1.5'>{errors.personalWebsite.message}</p>}

            </div>


            <button disabled={send} className={`text-[14px] ${send ? 'cursor-not-allowed bg-gray-400' :'bg-blue-500 hover:bg-blue-600'} text-white px-3 py-2 rounded-lg mt-5`}>Save Changes</button>

          </form>

         </div>
  )
}

export default PersonalInfo
