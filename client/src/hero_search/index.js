import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import './style.css';

const Search = (props) =>{
    return(
        <>
            <form onSubmit={props.handle} className="form-group main-search w-50 px-4">
                <div className="form-group has-search">
                    <span className="form-control-feedback"><FaSearch/></span>
                    <input type="text" className="form-control form-input" placeholder="Search" />
                </div>
                <p className="text-white search-label">powered by Google</p>
            </form>
        </>
    )
}

export default Search;