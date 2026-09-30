
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(0)


  return (
    <div>
       {num}
       <button onClick= { ()=>
        {
          setNum(num+1)
        }
       }>click me</button>
    </div>
  )
}

export default App
