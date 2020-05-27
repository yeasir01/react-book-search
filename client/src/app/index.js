import React, { useState, useEffect } from "react";
import Header from '../header';
import Hero from '../hero';
import Results from '../results';
import './global.css'
import API from '../utils/api'

function App() {
  
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    API.bookSearch(search)
    .then(res => {
      setBooksData(res.data.items)
      setErrorState(false)
    })
    .catch(err =>{
      setErrorData(err)
      setErrorState(true)
    })
    .finally(() =>{
      setLoading(false)
    })
  }, [loading, search]);

  const handleSubmit = (event) => {
    event.preventDefault()
    let query = event.target[0].value;
    setSearch(query)
    setLoading(true)
  };

  return (
    <div>
      <Header />
      <Hero handle={handleSubmit}/>
      <Results data={booksData} load={loading} errorData={errorData} errorState={errorState}/>
    </div>
  );
}

export default App;