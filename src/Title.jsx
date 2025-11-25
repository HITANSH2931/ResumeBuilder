import React from 'react'

const Title = ({title,description}) => {

  return (
    <div className='flex flex-col items-center mt-10 gap-3'>

        <h1 className='text-black text-3xl font-semibold '>{title}</h1>
        <p className='text-gray-500 text-center'>{description}</p>
      
    </div>
  )
}

export default Title
