import React, { useContext } from 'react'
import "./NewPost.css"
import DataContext from './Context/DataContext'

const NewPost = () => {
  const {title,setTitle,post,setPost,handleSubmit}=useContext(DataContext);
  return (
    <div className='new'>
      <h1>New Post</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
          <label>Title:</label>
          <input type='text' name='newpost' id='newpost' value={title} onChange={(e)=>setTitle(e.target.value)} required autoComplete='off'/>
          <label>Post:</label>
          <textarea  name='newpost1' id='newpost1' rows='6' value={post} onChange={(e)=>setPost(e.target.value)} required/>
          <div className='button'>
          <button type="submit" >Submit</button>
          </div>
      </form>

    </div>
  )
}

export default NewPost;