import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <h1>
          Screenviews
        </h1>
      </Router>

    </>
  )
}

export default App
