import React from 'react'

export default function Header() {
  const headerStyle = {
    backgroundColor: 'mediumblue',
    color:'#fff',
  };
  return (
    <header style={headerStyle}>
        <h1>Groceries list</h1>
    </header>
  )
}
