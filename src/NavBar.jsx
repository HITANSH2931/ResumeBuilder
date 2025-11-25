import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { logoutResume } from './Redux/Resume'
import { logout } from './Redux/AuthRedux';
import BASE_URL from './config';

const NavBar = () => {

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.user?.token);
  const dispatch = useDispatch();

  const location = useLocation();
  const showLinks = location.pathname === "/"

  const SubmitData = async () =>{

    try{
    const response = await axios.post(`${BASE_URL}/setNotVerified`,{},{

       headers:{
        Authorization:`Bearer ${token}`
       }
     })
    }

    catch(error){

      console.log(error);
    }
  }


  const handleLogout  = () =>{

    SubmitData();
    dispatch(logout());
    dispatch(logoutResume());
    navigate("/")

    
  }

  return (
    <div>

         <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    
                   <div className="flex items-center gap-1.5">
        
               <svg width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="2.5" width="13.5" height="19" rx="1.4" stroke="#2563EB" stroke-width="1.4" fill="white"/>
              <path d="M7 7.2h7" stroke="#2563EB" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M7 10h6" stroke="#2563EB" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M15.5 13.5l3.2-3.2a0.8 0.8 0 0 1 1.1 0l0.6 0.6a0.8 0.8 0 0 1 0 1.1l-3.2 3.2-1.7.6-.6-1.7z" stroke="#2563EB" stroke-width="0.9" fill="#EFF6FF"/>
              <path d="M14.8 14.2l1.2 1.2" stroke="#2563EB" stroke-width="1" stroke-linecap="round"/>
              </svg>

             <h1 className="text-black text-xl font-bold">Resume Builder</h1>

                   </div>


                   <div hidden={!showLinks} className='text-gray-700 text-[16px]  font-semibold flex gap-3.5 items-center'>

                     <a href="#home" className='hover:text-gray-800 hover:underline '>Home</a>
                    <a href="#features" className='hover:text-gray-800 hover:underline'>Features</a>
                    <a href="#testimonials" className='hover:text-gray-800 hover:underline'>Testimonials</a>
                    <a href="#footer" className='hover:text-gray-800 hover:underline'>Footer</a>

                    </div>

                  {!token ? (
                    <div className="flex gap-2">
                        <button onClick={() => navigate("/signUp")}  className=" px-6 py-3 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white">
                            Get started
                        </button>
                        <button  onClick={() => navigate("/login")} href="" className=" px-6 py-3 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" >
                            Login
                        </button>
                        
                    </div>)
                     :
                      (<div className="flex gap-2">
                        <button onClick={() => navigate("/dashboard")}  className="px-6 py-3 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white">
                            DashBoard
                        </button>
                        <button  onClick={() => handleLogout()}  className="px-6 py-3 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" >
                            Logout
                        </button>
                    </div>)}

                
                </nav>
      
    </div>
  )
}

export default NavBar
