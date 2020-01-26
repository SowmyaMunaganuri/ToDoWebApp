import React, {Fragment, useState} from 'react';

import {Redirect} from 'react-router-dom'

const Login = () => { 
    const [formData, setFormData]= useState({
      email:'',
      password:'',
    });
    const {email,password}=formData;
    const [isloggedin,setLoginStatus] = useState(false)
    const onChange= e =>setFormData({...formData,[e.target.name]:e.target.value});
    
    function login(e){
      e.preventDefault()  //helps in not refreshing the whole page
        localStorage.setItem('isloggedin' ,true)
       setLoginStatus(localStorage.getItem('isloggedin'))
       localStorage.setItem('isloggedin' ,false)
    }
    return ( 
    <Fragment>
    {isloggedin ? <Redirect to='/todo' /> : <Redirect to='/' /> }
      <section className="landing-inner">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={login}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} 
          onChange={e=>onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} 
          onChange={e=>onChange(e)}
          required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      </section>
    </Fragment>
    );
};


export default (Login);