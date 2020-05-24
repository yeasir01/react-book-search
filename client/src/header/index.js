import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { FcLibrary } from 'react-icons/fc';

const Header = () =>{
    return(
        <>  
            <nav className="nav navbar navbar-light bg-light navbar-expand justify-content-between mx-md-2">
                <a href="/" className="navbar-brand d-flex align-items-center"><FcLibrary className="logo-icon mr-1"/>My Virtual Library</a>
                <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Search</a>
                        <a className=" nav-item nav-link" href="/hi">Saved</a>
                </div>
            </nav>
        </>
    )
}

export default Header;
