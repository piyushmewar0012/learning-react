import React from 'react'

const Rightcard = () => {
  return (
      <div className='h-full overflow-hidden relative w-70'>
             <img  className ='rounded-3xl h-full w-full object-cover'src="https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
             <div className='absolute top-0 left-0 h-full w-full bg-amber-200'>
               <h2>1</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a eveniet necessitatibus quibusdam odio. Ab animi quas voluptatem cupiditate libero?</p>
             </div>
             <div>
                <button>satsify</button>
             </div>
    </div>
   

  )
}

export default Rightcard
