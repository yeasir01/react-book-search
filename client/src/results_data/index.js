import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import fallBack from './bookimgfallback.png';
import { RiHeartAddLine } from 'react-icons/ri';

const ResultData = ({ data }) => {
    return (
        data.map(book => {
            return (
                <div className="row m-card" key={book.id}>
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-auto d-block btm-mar">
                                            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : fallBack} 
                                            alt={"Book of " + book.volumeInfo.title} 
                                            className="mx-auto d-block"
                                            />
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="d-flex justify-content-between">
                                                        <h5 className="card-title">
                                                            <a href={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "#"} target="_blank" rel="noopener noreferrer">
                                                            {book.volumeInfo.title}</a>
                                                        </h5>
                                                        <a href="LINK" className="save-icon"><RiHeartAddLine /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">{book.volumeInfo.description}</p>
                                            <p>- <i>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ').toString() : "Author Data Unavailable"}</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default ResultData;