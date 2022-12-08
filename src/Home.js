import Post from "./Post";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  
 
  const navigateToRoute = (route) => {
      navigate(route)}
  const myobj={"user1":{"userId":"user1","postId":"01","name":"Asim","proflieImage":"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg","postImage":"https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","desc":"Being human","Time":"20:00"},"user2":{"userId":"user2","postId":"02","name":"Nauman","proflieImage":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png","postImage":"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","desc":"Being human","Time":"20:00"}};
 
 
  const key = Object.keys(myobj).map(v => {})

    return (
    <div class="main">
   
    
    <div class="main2">
     <header className="head1">
    
    <img class="imgg"src="https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png" ></img> 
    <img class="imgg2"src="https://i.pinimg.com/564x/ed/e3/fd/ede3fd578da46c08c3656ea17d99e5f9.jpg" onClick={()=>navigateToRoute(`/inbox?id=user1`)}></img> 
    
      </header>
    {
    Object.keys(myobj).map(v => {
      return(
        <Post obj={myobj[v]}/>
      )
    })
    }
   
  
  
    
    </div>
    </div>
    );
  };
  
  export default Home;