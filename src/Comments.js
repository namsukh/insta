import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import React from "react";
import DspComnts from "./dspComnts";
function Comments()
{
  const navigate = useNavigate();
  
 
  const navigateToRoute = (route) => {
      navigate(route)}
    const [searchParams] = useSearchParams();
    const   id = searchParams.get('id');
    console.log(id);
    const comnt={"01":{"1":{"name":"Asim","cmnt":"Noicee","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"},"2":{"name":"Nauman","cmnt":"Wow","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"},"3":{"name":"Ahmed","cmnt":"Wow","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"},"4":{"name":"Ian","cmnt":"Bravo","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"}}
    ,"02":{"name":"Asim","cmnt":"Noicee","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"},"2":{"name":"Nauman","cmnt":"Wow","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"},"3":{"name":"Ahmed","cmnt":"Wow","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"},"4":{"name":"Ian","cmnt":"Bravo","Time":"20:00","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"}};
    
    const filtr=comnt[id];
    //console.log(filtr[1])
    
    
   
    
    
    
    return(
        <div className="main">
              <div class="main2">
              <div className='bar' >
                        <div className='imback'>
                        <img src='https://img.icons8.com/ios-glyphs/30/000000/back.png' onClick={()=>navigateToRoute(`/`)}></img> 
                        </div>
                        </div>
                {
                 Object.keys(filtr).map(v => {
                 return(
                   <>
                    <DspComnts obj={filtr[v]}/>
                   </>
                  )
                })}
               <div className ="">
               Add Comment
               <input className="addComment"></input>
               </div>
                
     
      </div>
        </div>
      
    );
}
export default Comments;