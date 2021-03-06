import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import "../../css/Profile/ChangePassword.css";

const schema = yup.object().shape({
    oldPassword: yup.string().required("This Field is Required"),
    password: yup.string().required("This Field is Required").min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Please Enter a Valid Password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function ChangePassword() {

    const [oldPasswordVisibility, setOldPasswordVisibility] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
    const [oldPasswordErrorMessage, setOldPasswordErrorMessage] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    
    const togglePasswordVisiblity = function(value) {
        switch (value) {
            case 'oldPassword':
                setOldPasswordVisibility(oldPasswordVisibility ? false : true);
                break;
        
            case 'password':
                setPasswordVisibility(passwordVisibility ? false : true);
                break;
        
            case 'confirmPassword':
                setConfirmPasswordVisibility(confirmPasswordVisibility ? false : true);
                break;
        
            default:
                break;
        }
    };    

    const submitPassword = (data) => {
        console.log(data);
        if(btoa(data.oldPassword) === JSON.parse(sessionStorage.getItem('pass'))) {
            fetch("https://collegeforum.pythonanywhere.com/authentication/changePassword", {
      
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
                if (json.response === 'Valid') {
                    alert("Password Updated!!!");
                } else if (json.response === 'Wrong') {
                    alert('Something Went Wrong, Please Try Again!!!');
                }
            });
        } else {
            setOldPasswordErrorMessage('Old Password Does Not Match');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitPassword)}>
                <h4 className="profile_heading">Change Password</h4>

                <hr/>

                <div className="form-group">
                    <label>Old Password</label>
                    <input type={oldPasswordVisibility ? "text" : "password"} name="oldPassword" {...register('oldPassword')} className="form-control input-style change_pass_input" />
                    <span className="show-password" onClick={() => togglePasswordVisiblity('oldPassword')}>Show Password</span>
                    <p className="error_msg"> { errors.oldPassword?.message } </p>
                    <span className="error_msg"> { oldPasswordErrorMessage } </span>
                </div>


                <div className="form-group">
                    <label>Password</label>
                    <input type={passwordVisibility ? "text" : "password"} name="password" {...register('password')} className="form-control input-style change_pass_input" />
                    <span className="show-password" onClick={() => togglePasswordVisiblity('password')}>Show Password</span>
                    <p className="error_msg">  { errors.password?.message }</p>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type={confirmPasswordVisibility ? "text" : "password"} name="confirmPassword" {...register('confirmPassword')} className="form-control input-style change_pass_input" />
                    <span className="show-password" onClick={() => togglePasswordVisiblity('confirmPassword')}>Show Password</span>
                    <p className="error_msg">  { errors.confirmPassword && "Passwords should match" }</p>
                </div>

                <button type="submit" className="btn btn-primary save_btn" >Save</button>

                </form>
        </div>
    )

}

export default ChangePassword;