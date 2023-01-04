import React from "react";
// import App from "../App";
// import About from "../pages/About";
// import Profile from "../pages/Profile";
import "./styles.css";
import { Link , useMatch, useResolvedPath} from "react-router-dom";

const Header = () => {
 
  return (
    <div className="Header">
        <h1>My Logo</h1>
      
      <ul>
        {/* <li className="active">
          <a to="/home" >Home</a>
        </li>
        <li>
          <a to="/profile">Profile</a>
        </li>
        <li>
          <a to="/about">About</a>
        </li> */}
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </div>
  );
};

export default Header;

function CustomLink({to, children, ...props}){

    // const path = window.location.pathname; -------------->no longer using it
    //instead of calling the path in the way above we're gonna use appropriate hooks:
    //the hooks we're using are: "useMatch", "useResolvedPath"
    //-----------instead ------------------
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true}) // end:true is to make sure that react verifies that the entire path matches not just a partial much cuz this could cause a pb
    //exp we could be looking for a path "/profile" and there is "/profile/nadjiba" by using end:true the match won't exist otherwise it will
    return(
        <li className={isActive? "active" : ""}> {/* this code is to toggle the active class and see which page is active */}
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
