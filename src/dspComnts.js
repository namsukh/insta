import './dspComnts.css'
function DspComnts(prop)
{
    console.log("gg");
    console.log(prop.obj.name)
    return(
        <>
            <div class ="cmntContainer">
               <div class="text">
               <img  className="profile" src={prop.obj.img}/>
               {prop.obj.name} &nbsp;
               {prop.obj.cmnt}
               
                </div>
               {prop.obj.Time}
            </div>
        </>
    );
}
export default DspComnts;