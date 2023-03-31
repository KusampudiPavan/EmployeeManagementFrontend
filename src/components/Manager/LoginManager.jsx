import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { FiLogIn } from "react-icons/fi";
import loginpic from 'C:/Users/kusampudi.pavan/React Projects/employeefrontend/src/assets/manager.png'
import "C:/Users/kusampudi.pavan/React Projects/employeefrontend/src/components/Navbarstyle.css"
import Header from '../Header'

function LoginManager() {
  const [data, setData] = useState({
    email: '',
    password: ''

  });
  const { email, password } = data;
  const formHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const validateForm = email.length > 0 && password.length > 0;

    function SubmitHandler(sh) {
    sh.preventDefault();
    axios.post("http://localhost:8083/Manager/authenticatetoken",{
      manageremail:email,
      password:password
    }).then(res =>{
      if(res.data === 'Login Failed'){
        alert('Enter Correct Email and Password!!!')
        return
      }else{
        window.localStorage.setItem('jwt',res.data)
        window.location.href = "/managerhome" 
      }
    })
  }


  return (
    <div>
      <Header/>
    
      <div className="wrapper-inner-signup">
        <div className="row">
          <center>
            <div className="wrapper-inner-b">
            <h3 style={{fontStyle:"oblique"}}><center>Manager Login</center></h3>
              <div className='col'>
                <img src={loginpic} width="300px" alt='error' className='img-login'></img>
              </div><br />
              <div className='col'>
                <div>
                  <form onSubmit={SubmitHandler}>

                    <div className="mb-1">
                    <label style={{fontStyle:"oblique"}}><strong>Email Address:</strong></label>
                      <input type="email" style={{width:"300px"}} name="email" value={email} className="form-control" placeholder="Enter email" onChange={formHandler} autoFocus />
                    </div>
                    <div className="mb-3">
                    <label style={{fontStyle:"oblique"}}><strong>Password:</strong></label>
                      <input type="password" style={{width:"300px"}} name="password" value={password} className="form-control" placeholder="Enter password" onChange={formHandler} />
                    </div>
                    <div className='btn-lg-sp'>
                      <button type="submit" className="btn btn-success" disabled={!validateForm}>
                        Login <FiLogIn />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>

    </div>
  );
}
export default LoginManager;


