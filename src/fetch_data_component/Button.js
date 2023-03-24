import React from 'react'

const Button = ({text, reqType, setReqType}) => {

  const click = (e,text)=>{
    setReqType(text.toLowerCase());
  }
  return (
    <button className={text.toLowerCase() === reqType? "selected":null} onClick={(e) => click(e,text)} type='button'>{text}</button>
  )
}

export default Button