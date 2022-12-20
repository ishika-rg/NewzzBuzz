import React, { useState } from 'react';
import './Navbar.css';


import {

  // Switch,
  // Routes,
  // Route,
  Link
} from "react-router-dom";
import News from './News';
import Scroll from './Scroll';


export default function Navbar() {


  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    console.log('button clicked')
    if (theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }


  return (
    <nav className= {`navbar navbar-expand-lg sticky-top`}>
  <div className="container-fluid d-flex">
     <div className="navbar-brand" to="#">NewzzBuzz</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item"><Link className="nav-link" to="/latest">Latest</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/india">India</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
      </ul>


      
      <div className="d-flex">
        <Link to="/bookmark" className="bookmark me-4"> <i className ="fas fa-bookmark"></i></Link>
      <button className="form-check form-switch mode" onClick = {toggleTheme}>
         {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />DarkMode */}
         <i className='theme fas fa-moon'></i>
       </button>

        
      </div> 
      
    </div>
  </div>


</nav>
    
  )
}
