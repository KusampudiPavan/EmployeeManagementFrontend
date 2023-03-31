import React from 'react';
// import { Button } from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SidebarEmployee'

const EmployeeEditpage = () => {
  let navigate = useNavigate();

  const [employeeid, setemployeeid] = useState(0);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [gender, setgender] = useState('');
  const [manageremail, setmanageremail] = useState('');
 
  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
      .then(response => {
        window.localStorage.setItem("EmployeeEmail",response.data)
          }, [])
        
      
  }, []);

  const s_email = window.localStorage.getItem("EmployeeEmail");
  useEffect(() => {
    axios.get(`http://localhost:8081/adminemployee/get/${s_email}`).then(res => {
      setemployeeid(res.data.employeeid)
      setfirstname(res.data.firstname)
      setlastname(res.data.lastname)
      setemail(res.data.email)
      setpassword(res.data.password)
      setphonenumber(res.data.phonenumber)
      setgender(res.data.gender)
      setmanageremail(res.data.manageremail)
    });
  }, [])

  const update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8086/employee/update/${email}`, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      gender: gender,
      manageremail: manageremail,

    }).then(res => {
      console.log(res.status)
      alert("Updated successfully")
      navigate("/employeehome")
    })

  }
  function logout(e) {
    e.preventDefault();
    window.localStorage.removeItem('jwt');
    window.location.href = '/Navbarcomponent';
  }

  return (
    <div>
      <Sidebar />
      <div className="wrapper-inner-signup">
        <div className='row'>
          <center>
            <div className="wrapper-inner-a-signup">
              <h3><center>Edit Profile</center></h3>
              <br />
              <div className='col'>
                <div>
                  <form onSubmit={update}>
                    <div className='mb-3' >
                      <label style={{textAlign:"left",float:"left"}}><strong>Firstname:</strong></label>
                      <input type='text'  placeholder="Firstname" value={firstname} name='firstname' onChange={(e) => setfirstname(e.target.value)} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Lastname:</strong></label>
                      <input type='text' minLength={4} placeholder='Enter Lastname' value={lastname} name='lastname' onChange={(e) => setlastname(e.target.value)} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Email:</strong></label>
                      <input type='email' placeholder='Enter email' value={email} name='email'  className='form-control' />
                    </div>
                    {/* <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Password:</strong></label>
                      <input type='text' minLength={5} placeholder='Enter Password' value={password} name='password' onChange={(e) => setpassword(e.target.value)} className='form-control' />
                    </div> */}
                  

                    <div className="mb-3">
                      <label style={{ textAlign: "left", float: "left" }} ><strong>Gender:</strong></label>
                      <Form.Select onChange={(e) => setgender(e.target.value)} name='gender' value={gender} aria-label="Default select example">
                        <option>Select Gender</option>
                        <option >Male</option>
                        <option >Female</option>
                      </Form.Select>
                    </div>

                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Phonenumber:</strong></label>
                      <input type='number' maxLength={10} minLength={10} placeholder='phonenumber' value={phonenumber} name='phonenumber' onChange={(e) => setphonenumber(e.target.value)} className='form-control' />
                    </div>

                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Manager Email:</strong></label>
                      <input type='text' placeholder='manager' value={manageremail} name='manageremail' className='form-control' />
                    </div>


                    <div align="center">

                      <Button variant="secondary" type="submit" className="btn btn-info" >
                        Update Profile
                      </Button>{' '}
                      
                      <Link to='/employeehome'>
                        <button className='btn btn-danger' style={{ marginleft: "40px" }}>Cancel</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>

    </div>

  )
}

export default EmployeeEditpage