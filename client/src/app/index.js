import React from "react";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../header';
import SearchPage from '../pages/search';
import SavedPage from '../pages/saved';

function App() {

  return (
    <Router>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/saved" component={SavedPage} />
      </Switch>
    </Router>
  );
}

export default App;