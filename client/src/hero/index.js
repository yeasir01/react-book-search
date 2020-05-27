import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Search from '../hero_search'

const Hero = (props) =>{
    return(
        <div className="jumbotron jumbotron-fluid lib-img">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Search handle={props.handle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;