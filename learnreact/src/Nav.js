import React, { useContext } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'
const Nav = () => {
  const {search,setSearch} =useContext(DataContext);
  return (
    <div className='nav'>
       <input type='text' name='search' id='search' placeholder='Search Posts' value={search} onChange={(e)=>setSearch(e.target.value)} />
       console.log(search);
       <div className='list'>
           <Link to='/' className='li'><li>Home</li></Link>
           <li><Link to='/newpost' className='li'>Post</Link></li>
           <li><Link to='/about' className='li'>About</Link></li>
       </div>


    </div>
  )
}

export default Nav