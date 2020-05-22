import React from 'react';
import './style.css'
import Search from '../hero_search'

const Hero = () =>{
    return(
        <div class="container-fluid lib-img mb-4">
            <div className="row">
                <div class="col-md-5 p-lg-5 mx-auto my-5 text-white text-center hero">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Hero;