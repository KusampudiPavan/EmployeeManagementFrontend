import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { GiCancel } from "react-icons/gi"
import { SiGnuprivacyguard } from "react-icons/si"
import signupimg from "../assets/signuppic.png.jpg";


const SignUp = () => {

  let navs = useNavigate()
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: ""
  })

  const { firstname, lastname, email, phonenumber, password, confirmpassword } = data

  const formHandler = fh => {
    setdata({ ...data, [fh.target.name]: fh.target.value })
  }

  const disabledFunction = firstname.length > 0 && lastname.length > 0 && email.length > 0 && phonenumber.length > 0 && password.length > 0;

  const SubmitHandler = sh => {
    sh.preventDefault();
    console.log(data)
      axios.post("http://localhost:8082/Employees/add", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        password: password,

      }).then(res => {
        if(res.data === "Email id already exists!!"){
          alert("Email already exists!!")
          return
        }
        else{
          alert("Employee Regitration Successfull!")
          setdata(" ")
          navs('/')
        }
      });
  }

  function cancel(e) {
    e.preventDefault()
    navs('/')
  }

  return (
    <div className="wrapper-inner-a">
      <div className='row'>
        <div className='col'>
          <img className='img-signup' src={signupimg} alt="" />
        </div>
        <div className='col'>
          <div>
            <form onSubmit={SubmitHandler}>
              <center>
              <h2 style={{color:"#000000"}}>SignUp</h2>
              </center>
              <div className="mb-3 row">
                <div className="col">
                  <label>First name</label>
                  <input type="text" name="firstname"  value={firstname} className="form-control" placeholder="Enter Your Firstname" onChange={formHandler} autoFocus />
                </div>
                <div className="col">
                  <label>Last name</label> 
                  <input type="text" name="lastname" value={lastname}  placeholder="Enter Your Lastname" className="form-control" onChange={formHandler}  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className='col'>
                  <label>Email address</label>
                  <input  type="email" name="email" value={email} placeholder="Enter Your Email Address" className="form-control"  onChange={formHandler} />
                </div>
              
              <div className="mb-3">
                <label>Phone Number</label>
                <input type="text"  minLength={10} maxLength={10} name="phonenumber" value={phonenumber} className="form-control" placeholder="Enter Your Phonenumber" onChange={formHandler}  />
              </div>

             
                <div className='col'>
                  <label>Password</label>
                  <input min={6} max={20} type="password" name="password"  minLength={6}  value={password}  className="form-control" placeholder="Enter password"  onChange={formHandler} />
                </div>

                <div className='col' >
                <label>Confirm Password</label>
            <input type='password'  placeholder='Re-enter Password' value={confirmpassword} name='confirmpassword' onChange={formHandler} className='form-control' />
            {password !== confirmpassword ? <h6 style={{color : "red"}} >Passwords not matched!</h6> : null }
            </div>
              </div>
              <div className="btn-lg-sp">
              <button  className='btn btn-light' onClick={cancel}>Cancel <GiCancel/></button>
                <button type="submit" className="btn btn-info" disabled={!disabledFunction}>
                  Sign Up <SiGnuprivacyguard/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

  //   <div className='signup_container w-100 d-flex justify-content-center mt-5'>
  //     <div className='signup_form mt-5 w-50'>
  //       <center>
  //       <h4>SignUp</h4>
  //       </center>

  //     <div className='form mt-3'>
  //     <form autoComplete="off" autoSave='off' onSubmit={SubmitHandler} className='border p-3'>
  //       <div className= 'form' >
  //           <label><strong>Firstname:</strong></label>
  //           <input type='text' minLength={4} placeholder='Enter Firstname' value={firstname} name='firstname' onChange={formHandler} className='form-control'  />


  //           <label><strong>Lastname:</strong></label>
  //           <input type='text' minLength={4} placeholder='Enter Your Lastname' value={lastname} name='lastname' onChange={formHandler} className='form-control' />


  //           <label><strong>Email:</strong></label>
  //           <input type='email'  placeholder='Enter Your Email Address' value={email} name='email' onChange={formHandler} className='form-control' />

  //           <label><strong>Phone Number:</strong></label>
  //           <input type='number' min={5000000000} max={9999999999} placeholder='Enter Your Phone Number' value={phonenumber} name='phonenumber' onChange={formHandler} className='form-control' />

  //           <label><strong>Password:</strong></label>
  //           <input type='password'  placeholder='Enter Password' value={password} name='password' onChange={formHandler} className='form-control' />

  //           <label><strong>Confirm Password:</strong></label>
  //           <input type='password'  placeholder='Re-enter Password' value={confirmpassword} name='confirmpassword' onChange={formHandler} className='form-control' />
  //           {password !== confirmpassword ? <h6 style={{color : "red"}} >Passwords not matched!</h6> : null }

  //           <div className='mt-3'>
  //             <button  className='btn btn-primary w-50' onClick={cancel}>Cancel <GiCancel/></button>
  //             <button className='btn btn-primary w-50' disabled={!disabledFunction} >SignUp <SiGnuprivacyguard/></button>
  //           </div>

  //           <p className="forgot-password text-right">
  //           Already have an account <a href="/">sign in?</a>
  //       </p>
  //       </div>
  //     </form>
  //     </div>
  //     </div>
  //   </div>
  // )
}

export default SignUp



// {/* <div className="mb-3 row">
//                   <div className="col">
//                     <label>Age</label>
//                     <input onChange={(e) => handle(e)}
//                       id="age"
//                       value={data.age}
//                       type="text" className="form-control" placeholder="age" />
//                   </div>
//                   <div className="col">
//                     <label>Gender</label>
//                     <Form.Select value={data.gender} id="gender" onChange={(e) => handle(e)}>
//                       <option ></option>
//                       <option key={"Male"}>Male</option>
//                       <option key={"Female"}>Female</option>
//                     </Form.Select>
//                   </div>
//                 </div> */}






