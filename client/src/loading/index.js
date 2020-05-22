import React from 'react';

const Loading = () =>{
    return(
        <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;