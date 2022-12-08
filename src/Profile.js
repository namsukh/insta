
import ProfilePost from './ProfilePost'
import './Profile.css'
import { useParams, useSearchParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

function Profile()
{
    const navigate = useNavigate();
  
 
    const navigateToRoute = (route) => {
        navigate(route)}
    const [searchParams] = useSearchParams();
    const   id = searchParams.get('id');
    const data={'user1':{"meta":{"userName":"ASim009","name":"Asim","img":"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg","followers":"34.9k","Post":"34","Following":"90","desc":"This is the description"},"images":{"1":"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg","2":"https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg","3":"https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","4":"https://images.pexels.com/photos/377717/pexels-photo-377717.jpeg?",'5':"https://images.pexels.com/photos/133081/pexels-photo-133081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",'6':"https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},'user2':{"meta":{"userName":"Nam009","name":"Nauman","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png","followers":"4k","Post":"4","Following":"99","desc":"This is the description"},"images":{"1":"https://images.pexels.com/photos/377717/pexels-photo-377717.jpeg?","2":"https://images.pexels.com/photos/377717/pexels-photo-377717.jpeg?","3":"https://images.pexels.com/photos/377717/pexels-photo-377717.jpeg?","4":"https://images.pexels.com/photos/377717/pexels-photo-377717.jpeg?"}}}
   
    const filtrImg=data[id]["images"];
   // console.log(filtr);
    return(
        <div className='main'>

            <div className='main2'>
            <div className='USername'>

            {data[id]["meta"]["userName"]}
            </div>

            <div className='profileHeader'>
                     
                
                <div className='Top2'>
                <div>
                    
                <img  className="profile" src={data[id]["meta"]["img"]} ></img>
                <p>
              
                      
                    {data[id]["meta"]["name"]}
                    
                </p>
                </div>
                
                <div className="stats">
                    <div className='profilePost'>
                        
                        {data[id]["meta"]["Post"]}
                        <h5>Post</h5>
 
                    </div>
                    <div className='profilePost'>
                        {data[id]["meta"]["followers"]}
                        <h5>Followers</h5>
 
                    </div>
                    <div className='profilePost'>
                        {data[id]["meta"]["Following"]}
                        <h5>Following</h5>
 
                    </div>
               </div>
               </div>
               
               <div className='DEsc'>
               {data[id]["meta"]["desc"]}
               </div>
               <div className='messages'>
                   <button className='msgBtn'>Message</button> 
               </div>
            </div>
              
            
               <div className='imgHandler'>
               {
                 Object.keys(filtrImg).map(v => {
                 return(
                   <>
                    <ProfilePost obj={filtrImg[v]}/>
                   </>
                  )
                })}
               </div>
              
             

                
            </div>
          
          
            
        </div>
    );
}

export default Profile