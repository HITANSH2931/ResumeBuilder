import { User } from 'lucide-react';


const Summary2 = ({info,color}) => {

   
  return (
    
    <div hidden={!info?.summary} className='flex flex-col gap-4.5 relative pl-3'>


         <div className='absolute top-1 -left-6 rounded-full '>
             <User className='text-xl ' style={{color:color}}/>
        </div>

        <div style={{borderLeftColor:color}} className='h-full border-l-2 mt-0.5 absolute top-6 -left-3.5'></div>
          

              <strong style={{color:color,borderBottomColor:color}} className='text-xl font-semibold w-fit border-b-2 pb-1.5'>Professional Summary</strong>
              <p  className='text-[12px]  text-gray-800  wrap-break-word '>{info?.summary}</p>
    </div>

  )
}

export default Summary2
