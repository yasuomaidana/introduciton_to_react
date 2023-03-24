import React from 'react'
import Button from './Button'

const QueryForm = ({reqType, setReqType}) => {
  
  return (
    <form className='' onSubmit={(e) =>{e.preventDefault()}}>
        {["Users", "Comments", "Posts"].map((btext, i)=> (<Button key={i} text = {btext} reqType ={reqType} setReqType={setReqType}/>))}
    </form>
  )
}

export default QueryForm