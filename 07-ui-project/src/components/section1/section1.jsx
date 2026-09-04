import React from 'react'
import Navbar from './navbar'
import Content1 from './content1'
const Section1 = (props) => {
  return (
    <div className='h-full w-full'>
     < Navbar/>
     <Content1 users={props.users}/>
    </div>
  )
}

export default Section1
