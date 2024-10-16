import React, { useContext } from 'react'
import "./PostPage.css"
import { useParams } from 'react-router-dom'
import { Link} from 'react-router-dom'
import DataContext from './Context/DataContext'
const PostPage = () => {
  const {posts,handleDelete}=useContext(DataContext)
    const {id}=useParams();
    const datas=posts.find((datass)=>{
      return ((datass._id)===id);
   })
   
   
    return (
  
      <div className='post'>
       {datas &&<div> <h1>{datas.title}</h1>
       <p>{datas.datetime}</p>
       <p className='p'>{datas.body}</p>
       <div className='butt'>
       <button className='dlt' onClick={()=>{handleDelete(datas._id)} } >DELETE</button> 
       
       <Link to={`/edit/${id}`}><button className='edit'>EDIT</button></Link>
       </div>
       </div>
       }
       {!datas && <div className='notfound'>
        <h2>Post Not Found!!!</h2>
        <p><Link to='/' className='tag'>Visit HomePage</Link></p>
        </div>
        }
    </div>
   
      
  )

    
}

export default PostPage;
