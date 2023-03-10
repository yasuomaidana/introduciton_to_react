import React from 'react'

const Button = ({text, reqType, setReqType}) => {

  const click = (e,text)=>{
    setReqType(text.toLowerCase());
  }
  return (
    <button onClick={(e) => click(e,text)}>{text}</button>
  )
}

export default Button