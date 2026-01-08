import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const age = 28
  const name = 'Peter'
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='George' age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
