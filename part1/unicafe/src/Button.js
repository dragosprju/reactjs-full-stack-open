import React from 'react'

const Button = (props) => {
  const [value, setValue] = props.state
  const name = props.name

  function incrementValue() {
    setValue(value + 1)
  }
  
  return (
    <>
        <button onClick={incrementValue}>{name}</button>
    </>
  )
}

export default Button