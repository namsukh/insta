import './ProfilePost.css'
function ProfilePost(prop){

    console.log("hi",prop)
    return(
        <>
        
           <img className="imageCube" src={prop.obj}></img>

        </>
    );
}
export default ProfilePost;
