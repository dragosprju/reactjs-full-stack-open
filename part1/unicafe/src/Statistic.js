import React from 'react'

const Statistic = (props) => {
  // save clicks of each button to its own state
  const text = props.text
  const value = props.value
  
  return (
    <div>
      {text} {value}<br />
    </div>
  )
}

export default Statistic