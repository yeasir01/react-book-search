import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../loading';
import Error from '../error';
import ResultData from '../results_data';
import NoResults from '../noresults';

const Results = ({ data, load, errorData, errorState}) =>{
    return(
        <div className="container"> 
            {load && <Loading />}
            {!load && errorState && <Error error={errorData}/>}
            {!load && !data && <NoResults />}
            {data && !load && !errorState && <ResultData data={data}/>}
        </div>
    )
}

export default Results;