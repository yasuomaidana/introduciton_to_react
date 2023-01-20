import React from 'react'

export default function Footer() {
    const today = new Date();
  return (
    <footer>Copyright &copy;{today.getFullYear()}</footer>
  )
}
