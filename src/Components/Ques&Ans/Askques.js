import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Navbar from '../CommonFiles/Navbar';
import '../../css/Askques.css';
import Particles from 'react-particles-js';

function Aques(props) {

    const [codeState, setCodeState] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    let history = useHistory();

    const questionSubmit = (data) => {
        console.log(data);
        if(data.codeContent === "") {
            data.codeContent = 'None';
        }
        fetch("https://collegeforum.pythonanywhere.com/qna/AddQuestion", {
      
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
            if(json['response'] === 'Valid') {
                history.push('/Home')
            } else if (json['response'] === 'Wrong') {
                alert('Something Went Wrong, Please try again!!!')
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
            <div className="ask_nav">
                <Navbar className="ask_navbar" setUserId={ props.setUserId }/>
            </div>

            <div className="ask_wapper">
                <Particles className="ask_particles_bg" params={particlesOptions} />
                <div className="ask_bg"></div>

                <div className="askcard">       
                    <form className="form" onSubmit={ handleSubmit(questionSubmit) }>
                        <h2 className="ask_ques_heading">Ask Your Question</h2><br/><br/><br/>
                        
                        <div className="ques_btns">
                            <p className="ask_op_btn" onClick={ () => codeState?setCodeState(false):setCodeState(true)}><b>{ "{ }" }</b></p>
                            <p className="ask_op_btn"><b>B</b></p>
                            <p className="ask_op_btn"><i>I</i></p>
                        </div>

                        <textarea {...register('queContent', { required: true })} placeholder='Enter Your Question' className="ask_ques_textarea"></textarea>
                        <span className="error_msg">{ errors.queContent?.type === 'required' && "Question Field is required" }</span>
                        <br/>

                        {
                            codeState
                            ?
                            <div>
                                <textarea className="ask_ques_textarea" name="codeContent" {...register('codeContent')} placeholder='Enter Your Code Here'></textarea><br/>
                            </div>
                            :
                            <div>
                                <input className="code_input" type='hidden' name="codeContent" {...register('codeContent')} ></input><br/>
                            </div>
                        }
                        
                        <div className="ask_row">
                            <div className="row_left">
                                    <select name="category" {...register('category')} defaultValue="General">
                                        <option value="General">General</option>
                                        <option value="SVIIT">SVIIT</option>
                                        <option value="SVITS">SVITS</option>
                                        <option value="SVIM">SVIM</option>
                                        <option value="SVVV">SVVV</option>
                                        <option value="SVIFA">SVIFA</option>
                                    </select>
                            </div>

                            <div className="row_right">
                                <button type="submit" className="btn ask_btn">Publish question</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Aques;