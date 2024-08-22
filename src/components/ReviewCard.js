import React from 'react'

const ReviewCard = ({content , name}) => {
  return (
    <div>
      <div className='mx-4 border border-netred border-opacity-50  md:w-[400px] md:h-[300px] h-[200px] w-[300px]   text-offwhite p-4 text-center overflow-y-scroll'>
        <div className='md:w-20 w-10 bg-netred p-2  mx-auto rounded-full '>
          <img className='rounded-full '
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeovOjMzW8qkQEmDR868np3YP1bURzQsCmA&usqp=CAU" alt="no image"></img>
        </div>
        <h1 className='my-3 font-semibold mdtext-2xl text-sm sm:text-lg tracking-wider'>{name}</h1>
        <p className=' font-light tracking-wide  '>{content}</p>
    
       
      </div>
    </div>
  )
}

export default ReviewCard