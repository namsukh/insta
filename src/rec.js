import './Rec.css'
function Rec(prop)
{
   

    return(
        <div className='RecMain'>

            <div className="recContaienr" >

                {prop.obj}

            </div>
        </div>
    );
}
export default Rec;