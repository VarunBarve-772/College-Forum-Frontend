import React from "react";
import Navbar from './CommonFiles/Navbar';
import '../css/ourteamcard.css';
import Varun from '../Images/Varun.jpeg';
import Vaibhav from '../Images/Vaibhav.jpg';
import Sharma from '../Images/Sharma.jpg';

const About = (props) => {

  return(
    <div>
      <Navbar setUserId={ props.setUserId }/>

      <div className="about_container">
        <div className="about-sec-1">
          <center>
            <h3 className="team_heading">About Us</h3>
            <p className="about_content">
              Our mission is to share and grow the student's knowledge.
              A vast amount of the knowledge that would be valuable to many people is currently only 
              available to a few — either locked in people’s heads, or only accessible to select groups. 
              We want to connect the people who have knowledge to the people who need it, to bring together 
              people with different perspectives so they can understand each other better, and to empower 
              everyone to share their knowledge for the benefit of the rest of the Students.
            </p>
          </center>
        </div>

        <div className="about-sec-2">
          <h3 className="team_heading">Our Team</h3>
          <div className="team_container">
            <div className="about_row">
              <div className="about-col-lg-4">
                <div className="about_team">
                  <div className="top">
                    <h2 className="name">Vaibhav Porwal</h2>
                    <img className="circle-img" src={ Vaibhav } alt="avatar_img" />
                  </div>
                  
                  <div className="middle">
                    <strong> Backend Developer & Designer </strong>
                  </div>

                  <div className="bottom">
                    <p className="info">Email:<br/> vaibhav83porwal@gmail.com</p>
                    <p className="info">Mob No.: +91 9109517502</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about_row">
              <div className="about-col-lg-4">
                <div className="about_team">
                  <div className="top">
                    <h2 className="name">Varun Barve</h2>
                    <img className="circle-img" src={ Varun } alt="avatar_img" />
                  </div>

                  <div className="middle">
                    <strong> Full Stack Developer </strong>
                  </div>

                  <div className="bottom">
                    <p className="info">Email: varunbarve94@gmail.com</p>
                    <p className="info">Mob No.: +91 9826456772</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about_row">
              <div className="about-col-lg-4">
                <div className="about_team">
                  <div className="top">
                    <h2 className="name">Varun Sharma</h2>
                    <img className="circle-img" src={ Sharma } alt="avatar_img" />
                  </div>
                  
                  <div className="middle">
                    <strong> Frontend Developer </strong>
                  </div>

                  <div className="bottom">
                    <p className="info">Email : varunsharma13699@gmail.com</p>
                    <p className="info">Phone : +91 6264284337</p>
                  </div>
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