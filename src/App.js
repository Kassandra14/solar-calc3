
import SearchForm from "./components/SearchForm"
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Good from "./pages/Good";
import Bad from "./pages/Bad";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Calculator from './components/calculatorForm';
//import Map from './Map';

function App() {
  return (


      <Router>
      <div>
        <Navbar />
        <Wrapper>
      

          <Route exact path="/" component={About} />

        
         
          <Route exact path="/about" component={About} />
          <Route exact path="/good" component={Good} />
          <Route exact path="/bad" component={Bad} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
