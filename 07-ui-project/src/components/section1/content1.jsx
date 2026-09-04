import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const Content1 = (props) => {
  return (
    <div className=' h-[70vh] gap-10 flex items-center py-10 px-18 w-full'>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Content1
