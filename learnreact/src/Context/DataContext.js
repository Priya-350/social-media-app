import { createContext,useState,useEffect } from "react";
import axios from "axios";
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";
const DataContext=createContext({});
    

export const DataProvider=({children})=>{
    const [posts,setPosts]=useState([]);
    const [searchresult,setSearchresult]=useState([]);
    const [title,setTitle]=useState("")
    const [post,setPost]=useState("")
    const [edittitle,setEditTitle]=useState("")
    const [editpost,setEditPost]=useState("")
    const [search,setSearch]=useState("")

    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        
        let datetime=format(new Date(),"MMM dd,yyyy pp")
           const newpost={
               
               "title":title,
               datetime,
               "body":post
           }
          await axios.post("http://localhost:3500/users",newpost)
         
          
           setTitle("")
           setPost("") 
           navigate('/')
          }
          catch(err){
            console.log(err.message);
          }
          fetchItems()
      }

      const handleEdit=async(e,id)=>{
        e.preventDefault();
        try{
        let datetime=format(new Date(),"MMM dd,yyyy pp")
        const editpost1={
          
           "title":edittitle,
           datetime,
           "body":editpost
       }
       await axios.patch(`http://localhost:3500/users/${id}`,editpost1)
       
       
       
      }
      catch(err){
        console.log(err.message);
      }
      finally{
        navigate("/")
       setTitle("")
       setPost("") 
      }
      }
      const fetchItems=async()=>{
        try{
            const response=await axios.get('http://localhost:3500/users');
            setPosts(response.data);
        }
        catch(err){
           console.log(err.message);
        }
     }
      

useEffect(()=>{
  const filteredposts=posts.filter((datas)=>{
   
    return (
      
    ((datas.body).toLowerCase()).includes(search.toLowerCase())||((datas.title).toLowerCase()).includes(search.toLowerCase())
      
    )
   })
   setSearchresult(filteredposts.reverse());
  
},[search,posts])
    
const handleDelete=async(id)=>{
 
      try{
     
      await axios.delete(`http://localhost:3500/users/${id}`)
       
    }
    catch(err){
      console.log(err.message);
    }
    finally{
      navigate("/")
    }
    
}
useEffect(()=>{
  fetchItems();
},[handleEdit,handleDelete])
    return(
    <DataContext.Provider value={{search,setSearch,title,setTitle,post,setPost,posts,setPosts,searchresult,setSearchresult,editpost,edittitle,setEditPost,setEditTitle,handleEdit,handleDelete,handleSubmit}}>
      {children}
    </DataContext.Provider>
    )
}

export default DataContext;