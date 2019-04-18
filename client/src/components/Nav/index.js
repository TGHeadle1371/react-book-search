import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav className="navbar navbar-dark bg-dark text-white">
            <Link to="/"><h2 id="navTitle">React Google Book Search </h2></Link>
            <Link to="/saved" id="savedLink">Saved</Link>
        </nav>
    );
}

export default Nav;