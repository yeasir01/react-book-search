import React from 'react';

const Search = () =>{
    return(
        <>
            <form>
                <div class="form-group">
                    <input id="bookSearch" type="text" className="form-control rounded-pill px-3" placeholder="Search by booktitle..." />
                    <label htmlFor="bookSearch" className="mt-1">Powered by Google Books API</label>
                </div>
            </form>
        </>
    )
}

export default Search;