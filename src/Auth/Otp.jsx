import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../config';


const Otp = () => {

  const [input,setInput] = useState(new Array(5).fill(''));
  const inputRef = useRef([]);
  const [seconds,setSeconds]  = useState(59);
  const [minute,setMinute] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const[data,setData] = useState('');

  const [res,setRes] = useState('')
  const[send,setSend] = useState(false);


  useEffect(()=> {

    if(minute == 0 && seconds == 0) return;

    if(seconds == 0) {
      
      setMinute(minute-1);
      setSeconds(59);

    }

   const interval = setInterval(()=>{
    

      setSeconds(seconds-1); 
       
    },1000)

    return () => {
      
      
      clearInterval(interval)
    };

  },[seconds]);

  const handleChange = (e,index) =>{

    if(isNaN(input[index])) return

    const newIn = [...input];

    newIn[index] = e.target.value.slice(-1);
    
    setInput(newIn);

    setRes(newIn.join(''));

    inputRef.current[index+1]?.focus();
  }

  const handleDown = (e,index) =>{

       if(e.key === 'Backspace'){

        const newInput = [...input];

          if(input[index]){

          newInput[index] = '';

          setInput(newInput);

          }

          else{

            if(index == 0) return;
                      
          newInput[index-1] = '';

          setInput(newInput);

          inputRef.current[index-1]?.focus();
          }

          setRes(newInput.join(''))
            
           
       }
      }
       const handleReset = async () =>{

           if(seconds == 0 && minute ==0){

              setSeconds(59);
              setMinute(1);
           

           const response = await axios.get(`${BASE_URL}/resendOtp/${email}`)

           setData(response.data);

           setTimeout(()=> setData(''),7000);

           }


       }

       const handleSubmit =async  (e) =>{

          e.preventDefault();

          setSend(true);

          try{
              
            const response = await axios.get(`${BASE_URL}/verifyCode`,{

              params:{
                email:email,
                code:res
              }
            });

             navigate("/password",{state:{email:email}});
          }

          catch(e){

            setData(e.response.data);

            setTimeout(()=>setData(''),7000);

              
          }

          setSend(false);

         
       }
       
  

  return (
    <div className='h-[500px] flex justify-center items-center'>

        <form className='flex flex-col gap-9 max-w-md w-full shadow-[0_0_10px_gray]  p-6 font-display'>

            <div className='flex flex-col gap-4'>
            <h1 className='text-2xl text-center text-blue-600 font-bold'>Enter Verification Code</h1>
            <p className='text-gray-700 font-semibold text-[14px] text-center'>Enter the otp we sent to {email}</p>
            </div>

              {data && <p className='bg-pink-400 text-white text-center text-[13px] px-2 py-2 rounded-lg leading-6 '>{data}</p>}

            <div className='flex justify-between'>
              <p onClick={()=> handleReset()} disabled = {!(seconds == 0 && minute == 0)} className={` text-[14px]  ${minute == 0 && seconds == 0 ? 'text-blue-700 font-semibold hover:border-b hover: border-blue-700' : 'cursor-not-allowed text-gray-600 font-semibold hover:border-b hover: border-gray-600'}`}>Resend Code</p>
              <p className='text-gray-600 font-semibold text-[14px]'>Time Left : 0{minute} : {seconds < 10 ? `0${seconds}` : seconds}</p>
            </div>

            <div className='flex justify-around'>
              
              {input.map((inp,index) =>(

                 <input type="text"
                        key={index}
                        value={inp} 
                        ref={(ele) => inputRef.current[index] = ele}
                        onChange={(e) => handleChange(e,index)}
                        onKeyDown={(e) => handleDown(e,index)}
                        className=' text-gray-700 border border-solid border-gray-800 focus:outline-none text-center py-2 w-[50px]' />
                
              ))}
               
            </div>

            <button onClick ={(e)=>handleSubmit(e)} disabled={seconds == 0 && minute == 0 || res.length < 5 || send} className={` px-2 py-2 rounded-lg text-white ${send || seconds == 0 && minute == 0 || res.length !=5 ? 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 '} `}
            
             >{send ? 'Submitting' : 'Submit'}</button>

        </form>
      
    </div>
  )
}

export default Otp