import "./inboxDsp.css"
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

function InboxDsp(prop)
{
    const navigate = useNavigate();

    const navigateToRoute = (route) => {
        navigate(route)}
    console.log(prop.obj);

    return(
        <div className="msgcontent" onClick= {()=>navigateToRoute(`/directMsg?id=${prop.obj.user}`)}>
            
            <div class="msgcontent2">
            <img  className="profile" src={prop.obj.img} />
               <div className="textInbox">
                 <div>
                     {prop.obj.user}
                 </div> 
                    {prop.obj.ms}
               </div>
               
             
               
               
                </div>
        </div>
    );
}
export default InboxDsp;