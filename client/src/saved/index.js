import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fallBack from '../results_data/bookimgfallback.png';
import API from '../utils/api';
import './style.css';

function SavedData() {
  
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getSavedBooks()
    .then(res => {
      setBookData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
    .finally(()=>{
        setLoading(false)
    })
  }, [loading]);

  const handleDelete = (id)=>{
    API.removeBook(id)
    .then(res =>{
        console.log(res)
        setLoading(true)
        toast.success("Successfully Deleted!")
    })
    .catch(err=>{
        toast.error(`Opps! ${err}`, {autoClose: 5000})
    })
  }

  return (
    bookData.map(book => {
        return (
            <div className="row m-card" key={book._id}>
                <div className="col">
                    <div className="card my-3">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-auto d-block btm-mar">
                                        <img src={book.image ? book.image : fallBack} 
                                        alt={"Book of " + book.title} 
                                        className="mx-auto d-block"
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="card-title">
                                                        <a href={book.link ? book.link : "#"} target="_blank" rel="noopener noreferrer">
                                                        {book.title}</a>
                                                    </h5>
                                                    <button className="btn del-btn" onClick={()=>handleDelete(book._id)}><AiFillCloseCircle /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="card-text">{book.description}</p>
                                        <p>- <i>{book.author ? book.author.join(', ').toString() : "Author Data Unavailable"}</i></p>
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

export default SavedData;