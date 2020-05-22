import React from 'react';
import ResultsData from '../results_data';
import Loading from '../loading';

const Results = () =>{
    return(
        <div className="container">  
            <Loading />
            <ResultsData />
        </div>
    )
}

export default Results;