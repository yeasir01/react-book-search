import React from 'react';
import './style.css'
import Search from '../hero_search'

const Hero = () =>{
    return(
        <div className="container-fluid lib-img mb-4">
            <div className="row">
                <div className="col-md-5 p-lg-5 mx-auto my-5 text-white text-center hero">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Hero;