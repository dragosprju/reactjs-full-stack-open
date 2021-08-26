import React from 'react'

const StatisticLine = (props) => {
  // save clicks of each button to its own state
  const text = props.text
  const value = props.value
  
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

export default StatisticLine