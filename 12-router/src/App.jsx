
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(0)
const [first, setfirst] = useState(100)

  return (
    <div>
       {num}
       {first}
       <button onClick= { ()=>
        {
          setNum(num+1)
        }
       }>click me</button>
       <button onClick={()=>
        {
          setfirst(first+10)
        }
       }>clickme2</button>
    </div>
  )
}

export default App
