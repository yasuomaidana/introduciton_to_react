import React from 'react'

export const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add color name:</label>
        <input autofocus type='text' placeholder='Add color name' required
        value={colorValue}
        onChange={e => setColorValue(e.target.value)}
        ></input>
    </form>
  )
}
