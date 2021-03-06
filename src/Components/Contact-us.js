import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Navbar from './CommonFiles/Navbar';
import '../css/Contactus.css';

const schema = yup.object().shape({
    name: yup.string().required("This Field is Required").min(2).max(50).matches(/^[A-Za-z]+((('|-|\.)?([A-Za-z])+))?$/, "Please Enter a Valid Name"),
    email: yup.string().required("This Field is Required").email("Please Enter a Valid Email"),
    content: yup.string().required("This Field is Required")
})


const ContactUs = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        fetch("https://collegeforum.pythonanywhere.com/authentication/contactUs", {
      
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
                alert('Complaint Added');
            } else if (json.response === 'Wrong') {
                alert('Something Went Wrong, Please Try Again!!!');
            }
        });
    }

    return(
        <div>
            <Navbar setUserId={ props.setUserId } />

            <div className="card container contact_container">
                <h3 className="contact_heading">Contact-Us</h3>

                <form className="center" onSubmit={handleSubmit(submitForm)} >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" {...register('name')} className="form-control input-style contact_input_style" />
                        <span className="error_msg">{ errors.name?.message }</span>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" {...register('email')} className="form-control input-style contact_input_style" />
                        <span className="error_msg">{ errors.email?.message }</span>
                    </div>

                    <textarea {...register('content')} placeholder='Enter Your Query' className="contact_textarea"></textarea>
                    <span className="error_msg">{ errors.content?.message }</span><br/>

                    <button type='submit' className="submit_btn">Submit</button> 
                </form>

            </div>
        </div>
    );

}
export default ContactUs;
