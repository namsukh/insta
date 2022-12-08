import logo from './logo.svg';
import React from 'react';
import DirectMsg from './DirectMsg'
import Blogs from './Blog';
import { BrowserRouter, Routes, Route, Link,Switch } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Comments from './Comments';
import Profile from './Profile';
import Inbox from './Inbox';

import './App.css';

import Navigation from "./Navigation";

import Post from './Post';

function App() {
 const myobj={"user1":{"name":"asim","proflieImage":"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg","postImage":"","CommentLink":"","desc":"Being human","Time":"20:00"},"user2":{"name":"asim","proflieImage":"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg","postImage":"","CommentLink":"","desc":"Being human","Time":"20:00"}};
 
 
 const key = Object.keys(myobj).map(v => {})





 
 return (
  <>
     <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/post/:id" exact={true} element={<PostDetails/>}/> */}
                <Route path="/Comment" exact={true} element={<Comments/>}/>
                <Route path="/Profile" exact={true} element={<Profile/>}/>
                <Route path="/inbox" exact={true} element={<Inbox/>}/>
                <Route path="/directMsg" exact={true} element={<DirectMsg/>}/>
            </Routes>
  
 
   </>
  );
}

export default App;
