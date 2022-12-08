import InboxDsp from "./inboxDsp";
import { useParams, useSearchParams } from 'react-router-dom';
import './directMsg.css'
import Rec from "./rec";
import Sent from "./sent";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

function DirectMsg(prop){
    const navigate = useNavigate();

    const navigateToRoute = (route) => {
        navigate(route)}
   // const data={"user1":{"meta":{"name":"Asim"},"msg":{"1":{"user":"Akmal","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png","ms":"send your work"},"2":{"user":"Ajmal","ms":"is it real ?"}}}};
   const data ={"akmal":{"meta":{"name":"Akmal","img":"https://www.clipartmax.com/png/small/22-221507_kevin-profile-cartoon-pic-man.png"},"msg":{"rec":{"1":"Really","2":"How you got there?"},"sent":{"1":"yes","2":"Long Story "}}},"ajmal":{"meta":{"name":"Ajmal","img":"https://i0.wp.com/www.techowns.com/wp-content/uploads/2020/09/Change-Discord-Profile-Picture.jpg"},"msg":{"rec":{"1":"Hi","2":"Are you there?"},"sent":{"1":"Talk you later","2":"Good Night "}}}}
   const [searchParams] = useSearchParams();
   const   id = searchParams.get('id');
   console.log(id);
   const filtr=data[id]["msg"];
    return(
        <div className="main">
            <div className="main2">
                
            <div className='directBar' >
                        <div className='imback'>
                        <img src='https://img.icons8.com/ios-glyphs/30/000000/back.png' onClick={()=>navigateToRoute(`/`)}></img> 
                        <img className="Dprofile"src={data[id]["meta"]["img"]}></img>
                        </div>
                       
                          <p className='namebox'>

                          {data[id]["meta"]["name"]}
                        </p>  
                            
            </div>
            <div className="DContent">

                         {
                            Object.keys(filtr["rec"]).map(v => {
                          return(
                            <>
                            <Rec obj={filtr["rec"][v]} />
                            </>
                            )
                        })}
                         {
                            Object.keys(filtr["sent"]).map(v => {
                          return(
                            <>
                            <Sent obj={filtr["sent"][v]} />
                            </>
                            )
                        })}
            </div>
            </div>
        </div>
    )
    ;

}
export default DirectMsg;