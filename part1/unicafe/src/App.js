import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({text, count}) => <div>{text} {count}</div>

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
      <h1>statistics</h1>
      <Statistic text={"Good"} count={good} />
      <Statistic text={"Neutral"} count={neutral} />
      <Statistic text={"Bad"} count={bad} />
    </div>
  )
}

export default App