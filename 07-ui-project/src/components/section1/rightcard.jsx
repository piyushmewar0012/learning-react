import React from 'react'
import Rightcardcontent from './rightcardcontent'

const Rightcard = (props) => {
  return (
      <div className=' shrink-0 h-full overflow-hidden relative w-70'>
             <img  className ='rounded-3xl h-full w-full object-cover'src={props.img} alt="" />
              <Rightcardcontent  id={props.id} tag={props.tag}/>
    </div>
   

  )
}

export default Rightcard
