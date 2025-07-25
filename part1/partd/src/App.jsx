import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)  // ✅ Fixed: number, not array

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1
    })
    const updatedLeft = clicks.left + 1
    setAll(allClicks.concat('L'))
    setTotal(updatedLeft + clicks.right)
  }

  const handleRightClick = () => { 
    setClicks({
      ...clicks,
      right: clicks.right + 1
    })
    const updatedRight = clicks.right + 1
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + updatedRight)
  }

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {clicks.right}
      {/* <p>{allClicks.join(' ')}</p> */}
      <p>total: {total}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App