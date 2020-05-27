import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = (props) =>{
    return(
        <div className="alert alert-danger text-center display-4" role="alert">
            Somthing Went Wrong! <br/>{props.error}
        </div>
    )
}

export default Error;