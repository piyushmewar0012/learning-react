import React from 'react'
import Card from './componenTS/card'
const App = () => {
  return (
    <div className='parent'>
        <Card user="piyush mewar" img='https://images.unsplash.com/photo-1742745181459-815e9815ac05?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Card user="kris" img='https://images.unsplash.com/photo-1786108503420-2881fec216b1?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user="sunny" img='https://images.unsplash.com/photo-1786849715264-7333a823c6e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App
