import React from 'react';
// import { Button } from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SidebarManager'

const EditProfileManager = () => {
  let navigate = useNavigate();

  const [managerid, setmanagerid] = useState(0);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [manageremail, setmanageremail] = useState('');
  const [password, setpassword] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [gender, setgender] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
      .then(response => {
        window.localStorage.setItem('ManagerEmail',response.data)
        
      })
  }, []);


  const s_email = window.localStorage.getItem("ManagerEmail");
  useEffect(() => {
    axios.get(`http://localhost:8082/adminManager/get/${s_email}`).then(res => {
      setmanagerid(res.data.managerid)
      setfirstname(res.data.firstname)
      setlastname(res.data.lastname)
      setmanageremail(res.data.manageremail)
      setpassword(res.data.password)
      setphonenumber(res.data.phonenumber)
      setgender(res.data.gender)
      setmanageremail(res.data.manageremail)
    });
  }, [])

  const update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8082/adminManager/update/${manageremail}`, {
      firstname: firstname,
      lastname: lastname,
      manageremail: manageremail,
      password: password,
      phonenumber: phonenumber,
      gender: gender,
      manageremail: manageremail,

    }).then(res => {
      console.log(res.status)
      alert("Updated successfully")
      navigate("/managerhome")
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
            <div className="wrapper-inner-b">
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
                      <input type='email' placeholder='Enter email' value={manageremail} name='manageremail'  className='form-control' />
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


                    <div align="center">

                      <Button variant="secondary" type="submit" className="btn btn-info" >
                        Update Profile
                      </Button>{' '}
                      
                      <Link to='/managerhome'>
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

export default EditProfileManager