import { useState } from 'react'

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.allPoints/props.all}</p>
      <p>positive {(props.good / props.all) * 100}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad
  let allPoints = good * 1 + neutral * 0 + bad *(-1)


  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback
      </h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>

      <h2>statistics</h2>

      <Statistics all = {all} allPoints={allPoints} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App