import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import './Navigation.css'
function Navigation() {
    const location = useLocation();
    let routes = [
        {
            to: "/",
           
        },
        {
            to: "/about",
           
        },
        {
            to: "/profile",
          
        },
        {
            to: "/comments",
         
        }
    ]
    return (
        <>
           
        </>
    )
}
export default Navigation;
