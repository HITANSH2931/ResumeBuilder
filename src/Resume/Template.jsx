import { Check } from 'lucide-react';
import React from 'react'

const Template = ({value,setTemp}) => {

    const resumeTemplates = [
  {
    name: "Modern Minimal",
    description: "A clean, contemporary layout with strong typography and clear section separation. Perfect for tech and creative roles."
  },
  {
    name: "Corporate Classic",
    description: "A traditional, professional resume format with structured sections ideal for business, finance, and formal industries."
  },
  {
    name: "Creative Spotlight",
    description: "A visually engaging design with subtle color accents that highlight skills and achievements. Great for designers and marketing professionals."
  },
  {
    name: "Compact Professional",
    description: "A concise, space-efficient design that organizes key details cleanly while maintaining a polished, professional look."
  }
];

  return (
    <div className='absolute w-[250px] sm:w-[320px] top-full mt-3.5 backdrop-blur-md p-3 rounded-lg shadow-[0_0_10px_gray] bg-white flex flex-col gap-4.5'>

        {resumeTemplates.map((temp,index) =>(

            <div onClick={() => setTemp(index)}  key={index} className='border border-solid border-gray-300  rounded-lg px-2.5 py-3 flex flex-col gap-2 hover:bg-gray-100'>

                <div className='flex justify-between items-center'>

                <strong className='text-[13px]'>{temp.name}</strong>
                {value == index &&<div className='bg-blue-500 flex justify-center items-center rounded-full p-1'>
                     
                      <Check className='text-white w-4 h-4'/>
                    
                    </div>}

                </div>
                <p className='text-[9px] text-gray-700 bg-blue-100 rounded-lg px-2.5 py-2 '>{temp.description}</p>

            </div>    
        ))}
      
    </div>
  )
}

export default Template
