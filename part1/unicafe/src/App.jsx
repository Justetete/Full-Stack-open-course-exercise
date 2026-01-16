import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
  }

  const neutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }

  const badClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }

  const all = good + neutral + bad
  const allPoint = good * 1 + neutral * 0 + bad * (-1)
  const average = allPoint/all
  const positve = good / allPoint

  return (
    <div>
      <h1>give feedback
      </h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>

      <h2>statistics</h2>

      <p>good  {good}</p>
      <p>neutral  {neutral}</p>
      <p>bad  {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positve}%</p>
    </div>
  )
}

export default App