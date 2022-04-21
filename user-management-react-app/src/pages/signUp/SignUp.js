import React from "react";
import "./signUp.css"
import Form from "../../components/form/Form";
import signUpImage from "../../assets/signup.png"


function SignUp() {
  return (
    <>
      <div className='signup-form-container'>
       <Form />
      <div className='form-image'>
        <img src={signUpImage}  alt=""></img>
      </div>
    </div>
      
    </>
  );
}

export default SignUp;
