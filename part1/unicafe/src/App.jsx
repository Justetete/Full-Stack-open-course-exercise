import { useState } from 'react'

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.allPoints/props.all} />
        <StatisticLine text="positive" value={(props.good / props.all) * 100} />
      </tbody>
    </table>
  )
}

const Button = (props) => {
 /// Button handles the functionality of each feedback submission button.
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>positive</td>
        <td>{props.value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad
  let allPoints = good - bad 


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
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />

      <h2>statistics</h2>

      <Statistics all = {all} allPoints={allPoints} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App