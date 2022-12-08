import { useParams, useSearchParams } from 'react-router-dom';
import './Inbox.css'
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

import InboxDsp from './inboxDsp'
function Inbox()
{
    const navigate = useNavigate();
  
 
    const navigateToRoute = (route) => {
        navigate(route)}
    const [searchParams] = useSearchParams();
    const   id = searchParams.get('id');
    const data={"user1":{"meta":{"name":"Asim"},"msg":{"1":{"user":"akmal","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png","ms":"Long story"},"2":{"user":"ajmal","img":"https://i0.wp.com/www.techowns.com/wp-content/uploads/2020/09/Change-Discord-Profile-Picture.jpg","ms":"good night"}}}};
    const filtr=data[id]["msg"];
    return(
        <>
        fg
            <div className='main'>
                <div className='inboxMain'>
               
                        <div className='bar' >
                        <div className='imback'>
                        <img src='https://img.icons8.com/ios-glyphs/30/000000/back.png' onClick={()=>navigateToRoute(`/`)}></img> 
                        </div>
                       
                          <p className='namebox'>

                          {data["user1"]["meta"]["name"]}
                            </p>  
                            
                        </div>
                        <div className='search'>
                        <input className='searchBar'type="text" placeholder="Search.."></input>
                        </div>
                       
                        {
                            Object.keys(filtr).map(v => {
                          return(
                            <>
                         
                            <InboxDsp obj={filtr[v]} />
                            </>
                            )
                        })}
                        
                        
                </div>
            </div>
        </>
    );
}
export default Inbox;