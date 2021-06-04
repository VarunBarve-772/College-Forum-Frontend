import React from "react";
import Navbar from './CommonFiles/Navbar';
import '../css/ourteamcard.css';

const About = (props) => {

  return(
    <div>
      <Navbar setUserId={ props.setUserId }/>

      <div className="about-card">
        <div className="about-sec-1">
          <h3 >About Us</h3>
          <p>Our mission is to share and grow the student's knowledge.
           A vast amount of the knowledge that would be valuable to many people is currently only 
           available to a few — either locked in people’s heads, or only accessible to select groups. 
           We want to connect the people who have knowledge to the people who need it, to bring together 
           people with different perspectives so they can understand each other better, and to empower 
           everyone to share their knowledge for the benefit of the rest of the Students.</p>
        </div>
        <div className="about-sec-2">
          <h3 >Our Team</h3>
          <div className="row">
          <div className="col-lg-4">
          <div className="card">
<div className="top">
  <h2 className="name">Varun Sharma</h2>
  <img className="circle-img"  alt="avatar_img" />
</div>
<div className="bottom">
<p className="info">Email : varunsharma13699@gmail.com</p>
<p className="info">Phone : +9123456789</p>
</div>
</div>
          </div>
          <div className="col-lg-4">
          <div className="card">
<div className="top">
  <h2 className="name">Varun Barve</h2>
  <img className="circle-img"  alt="avatar_img" />
</div>
<div className="bottom">
<p className="info">Email : varunsharma13699@gmail.com</p>
<p className="info">Phone : +9123456789</p>
</div>
</div>
          </div>
          <div className="col-lg-4">
          <div className="card">
<div className="top">
  <h2 className="name">Vaibhav Porwal</h2>
  <img className="circle-img"  alt="avatar_img" />
</div>
<div className="bottom">
<p className="info">Email : varunsharma13699@gmail.com</p>
<p className="info">Phone : +9123456789</p>
</div>
</div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;