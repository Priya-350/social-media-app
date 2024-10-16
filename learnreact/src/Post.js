import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({datas}) => {
    
  return (
    <div className='homepage'>
         <h1 className='t'><Link to={`/postpage/${datas._id}`}>{datas.title}</Link></h1>
            <p className='t'><Link to={`/postpage/${datas._id}`}>{datas.datetime}</Link></p>
            <p className='p'>{datas.body.length<=30?datas.body:(datas.body.slice(0,30).concat("..."))}</p>

    </div>
  )
}

export default Post