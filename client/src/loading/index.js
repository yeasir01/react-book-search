import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () =>{
    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;