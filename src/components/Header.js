import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header= ()=>{
    const [authBtn,setAuthBtn] =useState(0)

// If no dependency array => useEffect is called on every render
//If dependency array is empty = [] =>useEffect is callled on initial render(just once)
//If dependency array is [authBtn] => called everytime authBtn is updated
//Always call use state hook inside the functional component
//Use state has specific purpose it is used to create local state variable inside component
// Always try to use usestate on the top
//Never try to use usestate inside if else condition,for loop and function this can create consistency - written in documentation
    useEffect(()=>{
        console.log("useEffect called");
    }, [authBtn])
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"   src={LOGO_URL} alt="APP LOGO" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <button className="auth" onClick={()=>{
                        setAuthBtn(authBtn+1);
                        setAuthBtn(authBtn+2);
                        setAuthBtn(authBtn+3);
                        console.log("Hello");
                    }
                        }>{authBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;