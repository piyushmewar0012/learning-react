import React from 'react'

const Card = (props) => {
  return (
         <div className="card">
        <div>
          <div className="top">
            <img src={props.logo} alt="" />
          <button>save </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='mid'>
          <h4>{props.tag}</h4>
          <h4>{props.tag3}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
         <div>
            <h3>{props.pay}</h3>
            <p>{props.pay}</p>
        </div>
        
         <button>Apply Now</button>
      </div>
    </div>
      
  )
}

export default Card
