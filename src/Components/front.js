import React from "react";
import Navbar from "./CommonFiles/Navbar"
import '../css/Front.css';
import c1 from '../Images/c1.png';
import c2 from '../Images/c2.png';
import c3 from '../Images/c3.png';  
import { Link } from "react-router-dom";

function Front() {
    return(
      <div>
        <Navbar/>

        <section className="carousel_container">
          <div className="carousel slide z-depth-1-half" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 ig" src={c3} alt="First slide"/>
                <Link to="/Signin"><button className="reg_btn"> Register </button></Link>
              </div>
          
              <div className="carousel-item">
                <img className="d-block w-100 ig" src={c1} alt="Second slide"/>
                <Link to="/Signin"><button className="reg_btn"> Register </button></Link>
              </div>
          
              <div className="carousel-item">
                <img className="d-block w-100 ig" src={c2} alt="Third slide"/>
                <Link to="/Signin"><button className="reg_btn"> Register </button></Link>

              </div>
            </div>
          
            <a className="carousel-control-prev" href="#carouselExample1" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            
            <a className="carousel-control-next" href="#carouselExample1" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    );
}
export default Front;
