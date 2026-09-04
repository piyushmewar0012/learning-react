import React,{useState} from 'react'


const App = () => {
  const [first, setfirst] = useState(0)
  
  function increment()
  {
    setfirst(first+1);
  }
  function decriment()
  {
    setfirst(first-1)
  }
  return (
    <div>
      <h1 className='h11'>{first}</h1>
      <button className='but1' onClick={increment}> +1</button>
      <button className='but2' onClick={decriment}>-1</button>
    </div>
  )
}

export default App
