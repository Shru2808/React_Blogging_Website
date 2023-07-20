import React from "react";
import '../css/Navcss.css';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
       {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home 
              {/* <span className="sr-only">(current)</span> */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
        <form action="/search" className="d-flex" role="search">
          <div className="searchbox">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
        <button className="btn btn-outline-dark mx-2" type="submit">Search</button>
       
      </form>
      </div>
      
    </nav>
  );
};

export default Navbar;