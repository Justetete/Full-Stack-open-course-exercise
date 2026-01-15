import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback
      </h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>

      <h2>statistics</h2>

      <p>good  {good}</p>
      <p>neutral  {neutral}</p>
      <p>bad  {bad}</p>
    </div>
  )
}

export default App