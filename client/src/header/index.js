import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Link } from "react-router-dom";
import { FcLibrary } from 'react-icons/fc';

const Header = () =>{
    return(
        <>  
        <div className="container-fluid bg-light">
            <nav className="nav navbar navbar-light bg-light navbar-expand justify-content-between mx-md-2">
                <a href="/" className="navbar-brand d-flex align-items-center"><FcLibrary className="logo-icon mr-1"/>My Virtual Library</a>
                <div className="navbar-nav">
                   <Link className="nav-item nav-link" to="/">Home</Link>     
                   <Link className="nav-item nav-link" to="/saved">Saved</Link>     
                </div>
            </nav>
        </div>
        </>
    )
}

export default Header;
