import { useState } from 'react'
import Nav from "./components/nav"
import Home from './components/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
</>
  )
}

export default App
