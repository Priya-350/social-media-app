import React, { useContext, useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import DataContext from './Context/DataContext';

const Edit = () => {
  const {edittitle,setEditTitle,editpost,setEditPost,posts:data,handleEdit}=useContext(DataContext)
    const {id}=useParams();
    const datas=data.find((datass)=>{
        return ((datass._id)===id);
     })

   useEffect(()=>{
    if(datas) {
        setEditTitle(datas.title)
        setEditPost(datas.body)
     }
   },[])  
  return (
    <div className='new'>

     {datas && <div><h1>Edit Post</h1>
      <form onSubmit={(e)=>handleEdit(e,datas._id)}>
          <label>Title:</label>
          <input type='text' name='editpost' id='newpost' value={edittitle} onChange={(e)=>setEditTitle(e.target.value)} autoComplete='off' />
          <label>Post:</label>
          <textarea  name='editpost1' id='newpost1' rows='6' value={editpost} onChange={(e)=>setEditPost(e.target.value)} />
          <div className='button'>
          <button type="submit" >Submit</button>
          </div>
      </form>
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

export default Edit