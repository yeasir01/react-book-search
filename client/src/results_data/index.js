import React from 'react';
import img from './sample.jpg'
import './style.css'

const ResultsData = () =>{
    return(
        <>
            <div className="outline mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-2 text-center">
                        <img className="card-img m-3" src={img} alt="some else"/>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-10">
                        <div className="card-body">
                            <h5 className="card-title">Eloquent Javascript</h5>
                            <p className="card-text">
                            JavaScript is at the heart of almost every modern Web application, 
                            whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for 
                            beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language 
                            that can be used to build full-scale applications.
                            </p>
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <p className="card-text"><small className="text-muted">Book by Marijn Haverbeke</small></p>
                                </div>
                                <div className="col-md-12 col-lg-6 text-right">
                                    <button type="button" className="btn btn-outline-secondary btn-sm mx-2 px-4 rounded-pill">More Info</button>
                                    <button type="button" className="btn btn-info btn-sm mx-2  px-4 rounded-pill">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="divider"/>
            <div className="outline mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-2 text-center">
                        <img className="card-img m-3" src={img} alt="some else"/>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-10">
                        <div className="card-body">
                            <h5 className="card-title">Eloquent Javascript</h5>
                            <p className="card-text">
                            JavaScript is at the heart of almost every modern Web application, 
                            whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for 
                            beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language 
                            that can be used to build full-scale applications.
                            </p>
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <p className="card-text"><small className="text-muted">Book by Marijn Haverbeke</small></p>
                                </div>
                                <div className="col-md-12 col-lg-6 text-right">
                                    <button type="button" className="btn btn-outline-secondary btn-sm mx-2 px-4 rounded-pill">More Info</button>
                                    <button type="button" className="btn btn-info btn-sm mx-2  px-4 rounded-pill">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="divider"/>
        </>
    )
}

export default ResultsData;