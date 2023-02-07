import colorNames from 'colornames'
import React from 'react'

export const Square = ({colorValue}) => {
  return (
    <section className='square' style={{backgroundColor:colorValue}}>
        <p>{colorValue ? colorValue : "There is no color 😔"}</p>
        <p>{colorValue ? colorNames(colorValue) : null}</p>
    </section>
  )
}

Square.defaultProps = {
    colorValue: "There is no color 😔"
}