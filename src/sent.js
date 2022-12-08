import './sent.css'
function Sent(prop)
{
   

    return(
        <div className='SentMain'>

            <div className="sentContaienr" >

                {prop.obj}

            </div>
        </div>
    );
}
export default Sent;