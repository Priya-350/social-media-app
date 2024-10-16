import React, { useContext } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'

const Home = () => {
  const {searchresult:data}=useContext(DataContext);
  return (
    <div className='home'>
     
    { data.length?  data.map((datas)=>{
          return (
            
            <div className='homepage'>
         <h1 ><Link to={`/postpage/${datas._id}`} className='t'>{datas.title}</Link></h1>
            <p ><Link to={`/postpage/${datas._id}`} className='t'>{datas.datetime}</Link></p>
            <p className='p'>{datas.body.length<=30?datas.body:(datas.body.slice(0,30).concat("..."))}</p>

    </div>
            
          )
        })
      : <div className='nopost'>  <p> No Posts to display 📋</p>
        
      </div>
       }
       </div>
      
    
  )
}

export default Home