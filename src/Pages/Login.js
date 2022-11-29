import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from '../Components/Header';


function Login(e) {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formError, setFormError] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  }
  const Validate = (values) => {
    console.log('dv');
    const errors = {};
    const EmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (values.email == "" && values.password == "") {
      console.log('sdc');
        setFormError({ invalid: "email or Password is required" });
    } else if (EmailRegex.test(values.email) === false) {
        setFormError({ email: "Invalid email id" });
    } else if (!values.password) {
        setFormError({ password: "password is required" });
    } else {
        setFormError({})
        loginform(formValues)
    }
    console.log(errors);
    return errors;
  };

  const loginform = (formValues) => {
    axios({
        method: 'post',
        url: `http://localhost:8080/api/user/signin`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: formValues
    }).then((result) => {
      console.log(result.data.user);
        if (result.data.success) {
          localStorage.setItem('accessToken', result.data.accessToken);
          localStorage.setItem('refreshToken', result.data.refreshToken);
          navigate("/dashboard");
        }
    }).catch((err) => {
      if (err.response.data === 'invalid Username/Password') {
        setFormError({ invalid: "Invalid UserId or Password" });
    } else if (err.response.data === "Invalid User"  || err.response.data === 'Something went wrong') {
        setFormError({ invalid: "Invalid UserId or Password" });
    }
    })

}
    return (
    <>
    <Header />
    <div className='login-temp'>
      <div className='loginForm'>
          <h3>Login Here</h3>
          <label for="username">Username</label>
          <input type="text" name='email' value={formValues.email} onChange={handleInput} placeholder="Email or Phone" id="username" />
          <p className='email_p'>{formError.email}</p>

          <label for="password">Password</label>
          <input type="password" name='password' value={formValues.password} onChange={handleInput}
                                                onKeyUp={(e) => (e.key == "Enter") && loginform(formValues)} placeholder="Password" id="password" />
    
          <p className='password_p'>{formError.password}</p>
          <p className='password_p'>{formError.invalid}</p>
          <button onClick={() => { Validate(formValues); }}>Log In</button>
      </div>
    </div>
    </>
    )
  
}

export default Login;
