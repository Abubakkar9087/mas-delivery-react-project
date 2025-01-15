import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
.login-section{
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  }
  .signup-form, .forgot-form{
    display: none;
  }
  .login-form, .signup-form, .forgot-form {
  width: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  .form-group{
    margin-bottom: 20px;
    text-align: left;
  }
  label{
  display: block;
  margin-bottom: 10px;
}
.input{
      width: 100%;
      height: 30px;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
}
    button {
    width: 100%;
    background-color: #0d1b2a;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
    transition: 0.3s ease-in-out;
    border: 2px solid #0d1b2a;
    font-weight: 700;

    &:hover {
      background-color: white;
      color: #0d1b2a;
      border: 2px solid #0d1b2a;
    }
  }
    .register-link{
      margin-top: 10px;
      text-align: center;
      
    }
    .forgot-password{
      margin-top: 10px;
      text-align: center;
      font-size: 14px;
}
      a{
        text-decoration: none;
        color: #8080ff;
        font-weight: 700;
      }

        a:hover{
         color:rgb(3, 64, 129);

        }
  }
`;

function Login() {

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const changeSignup = () => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "block";
  }
  const changeLogin = () => {
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".login-form").style.display = "block";
  }
  const changeForgot = () => {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".forgot-form").style.display = "block";
  }

  const changeforgotBack = () => {
    document.querySelector(".forgot-form").style.display = "none";
    document.querySelector(".login-form").style.display = "block";
  }

  return (
    <Wrapper>
      <div className="login-section">
        {/* login form start */}
        <div className="login-form">
          <form>
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" className='input' required />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" className='input' required />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={changeSignup}>Register</a></p>
          </div>
          <div className="forgot-password">
            <p><a href="#" onClick={changeForgot}>Forgot Password?</a></p>
            <p><Link to='/'>Back to Home</Link></p>
          </div>
        </div>
        {/* login form end */}

        {/* signup form start */}
        <div className="signup-form">
          <form>
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" className='input' required
              />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" className='input' required
              />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" className='input' required
              />
            </div>
            <div className="form-group">
              <label for="confirm-password">Confirm Password:</label>
              <input type="password" id="confirm-password" name="confirm-password" className='input' required
              />
            </div>
            <button type="submit">Signup</button>
          </form>
          <p>Already have an account? <a href="#" onClick={changeLogin}>Login</a></p>
        </div>
        {/* signup form end */}

        {/* forgot password form */}
        <div className="forgot-form">
          <form>
          <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" className='input' required
              />
            </div>
            <button>Submit</button>
            </form>
            <p>Back to <a href="#" onClick={changeforgotBack}>Login</a></p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Login