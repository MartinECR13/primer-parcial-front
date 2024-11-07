import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Card.jsx'
import Formulario from './Components/Formulario'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Card />
      <Formulario />
    </div>
     
    </>
  )
}

export default App
