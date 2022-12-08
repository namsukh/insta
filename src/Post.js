import React from "react";
import App from "./App";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Layout from "./Layout";

import './post.css';

function Post(prop){
    const navigate = useNavigate();
    console.log(prop);
   
    const navigateToRoute = (route) => {
        navigate(route)}
    function commmentHandler(postId)
    {
        navigate('/Comments/'+postId);
        console.log(postId);
     return(
        <>
      
        </>
     );   
    }
    return(
        <div class="Container">
           
           <div class ="container2">
                <div className="Top">
                     
                     <img  className="profile" src={prop.obj.proflieImage}  onClick= {()=>navigateToRoute(`/profile?id=${prop.obj.userId}`) }/>
                    <div class="textcontainer">
                        <p>
                        {prop.obj.name}<br/>
                        {prop.obj.desc}    
                        </p>
                       
                       
                    </div>
                </div>
                <br/>
               
                <br/>
                
                <p>
                    
                </p>
                <br/>
                <img  className="postImage" src={prop.obj.postImage}/>
                <br/>  
               { prop.obj.desc}  
                <div class= "footer">
                {prop.obj.Time}

                <a  text="comments" href={prop.obj.CommentLink}> comments</a>
                <FontAwesomeIcon icon={faComment} onClick= {()=>navigateToRoute(`/comment?id=${prop.obj.postId}`) }></FontAwesomeIcon>
                <FontAwesomeIcon icon={faHeart}  />
                </div>
                
           </div>
          
          
        </div>

    );
    

}

export default Post;