import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBook } from 'react-icons/bs';
import './style.css';

const NoResults = () =>{
    return(
        <div className="text-muted text-center" role="alert">
            <div className="mag-icon"><BsBook/></div>
            <div className="mag-text">No Results Found</div>
        </div>
    )
}

export default NoResults;