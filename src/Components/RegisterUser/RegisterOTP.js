import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../css/Forgotpassword.css';
import Particles from 'react-particles-js';

const RegisterOTP = (props) => {

  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [otpError, setOtpError] = useState('');

  const onSubmitOTP = function(data) {
    data.location = 'register';
    fetch("http://127.0.0.1:8000/authentication/OTP", {
      
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(data),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
    })

    // Converting to JSON
    .then(response => response.json())
    
    // Displaying results to console
    .then(json => {
      if(json.response === 'Valid') {
        props.setUserId(json['userId']);
        sessionStorage.setItem('userId', JSON.stringify(json['userId']));
        sessionStorage.setItem('pass', JSON.stringify(btoa(json['pass'])));
        history.push('/Home');
      }else if(json.response === 'Invalid') {
        setOtpError('Invalid OTP');
      } else if (json.response === 'Wrong') {
        alert('Something Went Wrong, Please Try Again!!!');
      }
    });

  }

  const particlesOptions = {
    particles: {
        number: {
            value: 40,
            desity: {
                enable: true,
                value_area: 900
            }
        },
        
        color: {
            value: "#17242A"
        },

        size: {
            value: 4
        },

        events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
        }
    }
  }

  return(
    <div>
    <Particles className="change_pass_particles_bg" params={particlesOptions} />
    <div className="change_pass_bg"></div>

    <div className="enrol_bg">
      <div className="otp_card">

        <center>
          <h2>Account Verification!</h2>
          <h6> Enter the OTP we just send on your Email.??</h6>
        </center>

        <form onSubmit={handleSubmit(onSubmitOTP)}>
          <center>
            <input type="text" name="otpValue" {...register('otpValue')} className="smsCode otp_input_style" autoFocus="" maxLength="4" size="1" min="0" max="9" pattern="[0-9]{4}"/><br/>

            <button type="submit" className="otp_submit_button">Verify</button><br/>
            <span className="error_msg">{ otpError }</span>
          </center>
        </form> 
      </div>
    </div>
  </div>       
  );
}
export default RegisterOTP;