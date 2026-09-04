import React from 'react'

const Rightcardcontent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
               <h2 className=' bg-white h-14  w-14 rounded-full justify-center items-center flex text-2xl font-bold '>{props.id+1}</h2>
               <p className=' text-white text-lg leading-normal mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a eveniet necessitatibus quibusdam odio. Ab animi quas voluptatem cupiditate libero?</p>
               <div>
                <button className='bg-blue-500 text-2xl ] rounded-full px-7 font-medium py-1 text-white'>  {props.tag}  </button>
             </div>
             </div>
             
  )
}

export default Rightcardcontent
