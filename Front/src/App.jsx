import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Computer vision</h1>
      <p>Insert URL, or type prompt</p>
      <input type="text" name="prompt" />
      <br />
      <button>Analize</button>
      <button>Generate</button>

    </>
  )
}

export default App
