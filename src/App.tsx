import { useState } from 'react'
import { BasicTypes } from './typescript'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Introduccion a REACT</h1>
      <BasicTypes/>
    </main>
  )
}

export default App
