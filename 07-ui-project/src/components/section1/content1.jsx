import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const Content1 = () => {
  return (
    <div className=' h-[70vh] gap-10 flex items-center py-10 px-18 w-full'>
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default Content1
