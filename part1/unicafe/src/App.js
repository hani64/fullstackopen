import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <div>{text} {value} </div>

const Statistics = ({good, bad, neutral}) => {
  const average = (good, neutral, bad) => (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
  const positive = (good, neutral, bad) => (good / (good + neutral + bad)) * 100

  return (
    good + neutral + bad ?
    <div>
      <h1>statistics</h1>
      <StatisticLine text={"Good"} value={good} />
      <StatisticLine text={"Neutral"} value={neutral} />
      <StatisticLine text={"Bad"} value={bad} />
      <StatisticLine text={"All"} value={good + neutral + bad} />
      <StatisticLine text={"Average"} value={average(good, neutral, bad)} />
      <StatisticLine text={"Postive"} value={`${positive(good, neutral, bad)} %`} />
    </div> :
    <div>
      <h1>statistics</h1>
      No feedback given
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"Good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"Bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App