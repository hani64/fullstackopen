import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({text, count}) => <div>{text} {count} </div>

const Statistics = ({good, bad, neutral}) => {
  const average = (good, neutral, bad) => (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
  const positive = (good, neutral, bad) => (good / (good + neutral + bad)) * 100

  return (
    good + neutral + bad ?
    <div>
      <h1>statistics</h1>
      <Statistic text={"Good"} count={good} />
      <Statistic text={"Neutral"} count={neutral} />
      <Statistic text={"Bad"} count={bad} />
      <Statistic text={"All"} count={good + neutral + bad} />
      <Statistic text={"Average"} count={average(good, neutral, bad)} />
      <Statistic text={"Postive"} count={`${positive(good, neutral, bad)} %`} />
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