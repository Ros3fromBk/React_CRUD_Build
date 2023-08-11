import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router } from "react-router-dom"

function App() {

// Making the .env key a variable
  const var10_1 = import.meta.env.VITE_10_1_VAR

  
  console.log(" one .env variable", import.meta.env.VITE_10_1_VAR,
  var10_1)
  return (
    <>
      <Router>

        <h1>
          Screenviews
        </h1>
        <h2> TEST {import.meta.env.VITE_10_1_VAR} </h2>
      </Router>

    </>
  )
}

export default App
