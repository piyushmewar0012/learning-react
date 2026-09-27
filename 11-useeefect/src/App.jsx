import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(100)

  function Achanging()
  {
    console.log("a ki value change ho gyi")
  }
  function Bchange()
{
  console.log("b ki value change ho gyii")
}
  useEffect (function()
{
  Achanging()
},[a])

  return (
    <div>
      {a} <br />
      {b}
      <button onClick={ ()=>
        {
              setA(a+1);
        }
      }>click</button>
      <button onClick={()=>
        {
          setB(b+10)
        }
      }>
        clcik2
      </button>
    </div>
  )
}

export default App
