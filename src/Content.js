import React from 'react'

export default function Content() {
        const handleName = () =>{
            const names = ["Yasuo","Nadia","Benjamin"];
            const int = Math.floor(Math.random()*3);
            return names[int];
        }
  return (
    <main>
        {handleName()}
    </main>
  )
}
