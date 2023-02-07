import React from 'react'
import './Color.scss'
import { Square } from './Square'
import { Input } from './Input'
import { useState } from 'react'

export const Color = () => {
    const [colorValue, setColorValue] = useState('');
  return (
    <div className='Color'>
        <Square colorValue={colorValue}/>
        <Input colorValue={colorValue} setColorValue={setColorValue}/>
    </div>
  )
}
