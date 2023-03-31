import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import {GiCancel} from 'react-icons/gi';
import {MdUpdate} from 'react-icons/md';


const Update = () => {

    let navigate = useNavigate();
   // const [id, setID] = useState(0);
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
   // const [password, setpassword] = useState('');

    const disabledFunction = firstname.length > 0 && lastname.length > 0 && email.length > 0 && phonenumber.length > 0;


    useEffect(() => {
      //  setID(localStorage.getItem('ID'))
        setfirstname(localStorage.getItem('FirstName'));
        setlastname(localStorage.getItem('LastName'));
        setemail(localStorage.getItem('Email'));
        setphonenumber(localStorage.getItem('PhoneNumber'));
      //  setpassword(localStorage.getItem('Password'));
      
    }, []);



    const updateform = () => {
        axios.put(`http://localhost:8082/Employees/update/${email}`, {
            firstname:firstname,
            lastname:lastname,
            email:email,
            phonenumber:phonenumber,
          //  password:password
            // addressline1,
            // addressline2,
            // city,
            // state
        },{
            headers :{
                'Authorization' : "Bearer " + window.localStorage.getItem("jwt")
            }
        })
        .then(() => {
            console.log("Updated")
        })
        navigate("/dashboard")
    }
    return (
        <div className="wrapper-inner-a">
        <div className='row'>
          <div className='col'>
            <div>
              <form onSubmit={updateform}>
                <center>
                <h2 style={{color:"#000000"}}>Update Profile</h2>
                </center>
                <div className="mb-3 row">
                  <div className="col">
                    <label>First name</label>
                    <input type="text" name="firstname"  value={firstname} className="form-control" placeholder="Enter Your Firstname" onChange={(e)=> setfirstname(e.target.value)} autoFocus />
                  </div>
                  <div className="col">
                    <label>Last name</label> 
                    <input type="text" name="lastname" value={lastname}  placeholder="Enter Your Lastname" className="form-control" onChange={(e)=> setlastname(e.target.value)} />
                  </div>
                </div>
  
                <div className="mb-3 row">
                  {/* <div className='col'>
                    <label>Email address</label>
                    <input  type="email" name="email" value={email} placeholder="Enter Your Email Address" className="form-control"  onChange={formHandler} />
                  </div> */}
                
                <div className="mb-3">
                  <label>Phone Number</label>
                  <input type="text"  minLength={10} maxLength={10} name="phonenumber" value={phonenumber} className="form-control" placeholder="Enter Your Phonenumber" onChange={(e)=> setphonenumber(e.target.value)}  />
                </div>
  
               
                  {/* <div className='col'>
                    <label>Password</label>
                    <input min={6} max={20} type="text" name="password"  minLength={6}  value={password}  className="form-control" placeholder="Enter password"  onChange={(e)=> setpassword(e.target.value)} />
                  </div> */}
  
                  {/* <div className='col' >
                  <label>Confirm Password</label>
              <input type='password'  placeholder='Re-enter Password' value={confirmpassword} name='confirmpassword' onChange={formHandler} className='form-control' />
              {password !== confirmpassword ? <h6 style={{color : "red"}} >Passwords not matched!</h6> : null }
              </div> */}
                </div>
                <div className="btn-lg-sp">
                <button  className='btn btn-light' onClick={(e)=> navigate('/dashboard')}>Cancel <GiCancel/></button>
                  <button type="submit" className="btn btn-info" disabled={!disabledFunction}>
                     Update <MdUpdate/>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        
    );
}

export default Update