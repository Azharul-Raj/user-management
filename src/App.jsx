import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/Main/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-red-500'>Hey there</h1>
      <HomePage/>
    </div>
  )
}

export default App
