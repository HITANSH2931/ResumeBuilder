import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();

  return (
     <div className='flex justify-center items-center h-[500px] '>

        <div className='font-display max-w-sm flex flex-col gap-5 py-9  px-2 rounded-xl shadow-[0_0_10px_gray]'>

            <div className='flex justify-center items-center gap-1.5'>
            <FontAwesomeIcon icon={faTriangleExclamation} className='text-red-600 text-3xl'/>
            <h1 className='text-3xl text-red-600 text-center'>403</h1>
            </div>

            <h1 className='text-gray-700 text-xl text-center font-semibold'>Unauthorized Access</h1>
            <p className='text-gray-800 text-[14px] text-center'>Sorry, The page you are trying to access does not exist. Please contact administrator.</p>
           
             <div className=' text-[14px]  text-white mt-2 flex justify-center'>
        
            <button onClick={() => navigate("/")} className='bg-blue-600 hover:bg-blue-700  rounded-lg px-2.5 py-2'>
                <FontAwesomeIcon icon={faChevronLeft} className='text-mine-shaft-100'/>
                Go to Home Page</button>
            </div>

        </div>
      
    </div>
  )
}

export default NotFound
