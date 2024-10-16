import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <h2>Copyright &copy; {new Date().getFullYear()}</h2>
    </div>
  )
}

export default Footer