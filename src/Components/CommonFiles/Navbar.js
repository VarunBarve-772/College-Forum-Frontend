import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../css/Navbar.css';
import logo from '../../Images/logo.png';

const Navbar = (props) => {

    let history = useHistory();

    const userLogout = () => {
        fetch(`https://collegeforum.pythonanywhere.com/authentication/logoutUser`);
        props.setUserId('');
        sessionStorage.clear();
        history.push('/');
    }

    return(
        <div>
            {
                sessionStorage.getItem('userId')
                ?
                <div className="sec-1" >
                    <div className="row">

                        <div className="col-lg-4">
                            <Link to="/Home">
                                <img className="logo_img" src={ logo } alt="College Forums" />
                            </Link>               
                        </div>

                        <div className="col-lg-8">
                            <div className="topnav">

                                <div className="topnav-right" >
                                    <Link className="ask" to="/AskQuestion">Ask a question</Link>
                                    <Link className="a" to="/ContactUs">Contact Us</Link>
                                    <Link className="a" to="/AboutUs">About Us</Link>
                                    <Link className="a" to="/Profile">Profile</Link>
                                    <button onClick={ userLogout } >Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="sec-1" >
                    <div className="row">

                        <div className="col-lg-4">
                            <Link to="/">
                                <img src={ logo } className="logo_img" alt="College Forums" />
                            </Link>
                        </div>

                        <div className="col-lg-8">
                            <div className="topnav">

                                <div className="topnav-right" >
                                    <Link className="a" to="/ContactUs">Contact Us</Link>
                                    <Link className="a" to="/AboutUs">About Us</Link>
                                    <Link className="a" to="/Login">Login</Link>
                                    <Link className="a" to="/Signin">Sign Up</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar;