import React from 'react'
import "./Missing.css"
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <div className='missing'>
      <h2>404 Error❌</h2>
      <p>PAGE NOT FOUND</p>
      <p id='link'><Link to="/">Visit Our HomePage</Link></p>
    </div>
  )
}

export default Missing