
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import loginpic from "../assets/loginpic.jpg";
import {FiLogIn} from "react-icons/fi"


function Login() {
  const [data,setdata] = useState({
    email: "",
    password: "",
  })

  const {email,password} = data

  const formHandler = fh =>{
    setdata({...data,[fh.target.name]:fh.target.value})
  }

  const validateForm = email.length > 0 && password.length > 0;

  // useEffect(() => { 
  //   data.current.focus()
  // },[])

  function SubmitHandler(sh) {
    sh.preventDefault();
    console.log(data)
    // navs('/dashboard')
    axios.post("http://localhost:8082/Employees/authenticate",{
      email:email,
      password:password
    }).then(res =>{
      if(res.data === 'Login Failed'){
        alert('Enter Correct Email and Password!!!')
        return
      }else{
        window.localStorage.setItem('jwt',res.data)
        window.location.href = "/dashboard" 
      }
    })
  }

  return (
    <div className="wrapper-inner">
        <div className="row">
          <div className='col'>
            <img src={loginpic} alt='error' className='img-login'></img>
          </div>
          <div className='col'>
          <div >
              <form onSubmit={SubmitHandler}>
                <center>
                <h2 style={{color:"black"}}>Login</h2>
                </center>
                <div className="mb-3">
                  <label>Email address</label>
                  <input type="email" name="email" value={email} className="form-control" placeholder="Enter email" onChange={formHandler} autoFocus/>
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" name="password" value={password} className="form-control" placeholder="Enter password" onChange={formHandler} />
                </div>
                <div className='btn-lg-sp'>
                <button type="submit" className="btn btn-success" disabled={!validateForm}>
                    Login <FiLogIn />
                </button>
                </div>
                <div className="mt-3">
                       <p className="mb-3  text-center"  >
                         Don't have an account?{" "}
                         <a style={{color: "red",fontWeight:"100px"}}  href={"/signup"} >
                           Sign Up
                         </a>
                       </p>
                       <center>
                       <p className="forgot-password text-right">
             <a href="/verificationpage"> Forgot password?</a>
             
         </p>
         </center>
                     </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    // <div>
    //   <Container>
    //     <Row className="vh-100 d-flex justify-content-center align-items-center">
    //       <Col md={8} lg={6} xs={12}>
    //         <div className="border border-3 border-primary"></div>
    //         <Card className="shadow">
    //           <Card.Body>
    //             <div className="mb-3 mt-md-4">
    //               <h2 className="fw-bold mb-2 text-uppercase ">Sign in</h2>
    //               <p className=" mb-5">Please enter your Email and password!!!</p>

    //               <div className="mb-3">
    //                 <Form autoComplete="off" autoSave='off' onSubmit={SubmitHandler} className='border p-3'>
    //                   <Form.Group className="mb-3" controlId="formBasicEmail">
    //                     <Form.Label className="text-center">Email</Form.Label>
    //                     <Form.Control type='email'  placeholder='Enter Your Email' value={email} name='email' onChange={formHandler} />
    //                   </Form.Group>

    //                   <Form.Group className="mb-3" controlId="formBasicPassword">
    //                     <Form.Label>Password</Form.Label>
    //                     <Form.Control type='password' placeholder='Enter Your Password' value={password} name='password' onChange={formHandler} />
    //                   </Form.Group>

    //                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //                     <p className="small">
    //                       <a className="text-primary" href="/verificationpage">Forgot password?</a>
    //                     </p>
    //                   </Form.Group>

    //                   <div className="d-grid">
    //                     <Button variant="primary" type="submit" disabled={!validateForm} >
    //                       Login <FiLogIn />
    //                     </Button>
    //                   </div>
    //                 </Form>

    //                 <div className="mt-3">
    //                   <p className="mb-0  text-center"  >
    //                     Don't have an account?{" "}
    //                     <a href={"/signup"} className="text-primary fw-bold">
    //                       Sign Up
    //                     </a>
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );

 
}



export default Login