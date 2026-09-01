import React from 'react'

const card = (props) => {
  return (
    <div>
        
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, porro?</p>
        <button>view profile</button>
    </div>
    </div>
  )
}

export default card
