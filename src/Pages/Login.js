import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from '../Components/Header';


function Login(e) {
  const navigate = useNavigate();
  const initialValues = { email: "faculty@gmail.com", password: "1234" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formError, setFormError] = useState({});



  const signIn = (formValues) => {
    axios({
        method: 'post',
        url: `http://localhost:8080/api/user/signin`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: formValues
    }).then((result) => {
      console.log('llsbFSBgngngngndgng');
        if (result.data.success) {
          navigate("/dashboard");
        }
    }).catch((err) => {
     
    })

}
    return (
    <>
    <Header />
    <div className='login-temp'>
      <form className='loginForm'>
          <h3>Login Here</h3>
          <label for="username">Username</label>
          <input type="text" name='email' value={formValues.email}  placeholder="Email or Phone" id="username" />
          <p className='email_p'>{formError.email}</p>

          <label for="password">Password</label>
          <input type="password" name='password' value={formValues.password} 
                                                onKeyUp={(e) => (e.key == "Enter") && signIn(formValues)} placeholder="Password" id="password" />
    
          <p className='password_p'>{formError.password}</p>
          <p className='password_p'>{formError.invalid}</p>
          <button onClick={() => { signIn(formValues); }}>Log In</button>
          <div class="social">
            <div class="go"><i class="fab fa-google"></i>  Google</div>
            <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
          </div>
      </form>
    </div>
    </>
    )
  
}

export default Login;
