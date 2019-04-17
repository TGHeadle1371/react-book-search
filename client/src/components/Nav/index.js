import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav className="navbar navbar-dark bg-dark text-white">
            <h2>React Google Book Search </h2>
            <Link to="/">Home</Link>
            <br></br> 
            <Link to="/saved">Saved</Link>
        </nav>
    );
}

export default Nav;