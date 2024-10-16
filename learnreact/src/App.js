import React from "react"
import "./App.css"
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";

import {Routes,Route} from "react-router-dom"
import Edit from "./Edit";

import {DataProvider} from "./Context/DataContext";

function App(){
    
    return(
             
        <div className="app">
          <DataProvider>
          <Header/>
          <Nav/>
        <Routes>
          <Route
            path="/"element={<Home />}
          />
          <Route
            path="/about" element={ <About/>}
          />
           <Route
            path="/newpost" element={ <NewPost />}
          />
           <Route
            path="*" element={ <Missing/>}
          />

          <Route path='/postpage/:id' element={<PostPage />}  />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
         
           <Footer/>
           </DataProvider>
        </div>
    )
}
export default App;