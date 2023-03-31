import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Sidebar from './SidebarAdmin'


const AddManager = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    phonenumber: "",
  })


  const { firstname, lastname, email, password, gender, phonenumber } = data

  const addHandler = fh => {
    setData({ ...data, [fh.target.name]: fh.target.value })
  }

  const AddManager = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8082/adminManager/addmanager", {
        firstname: firstname,
        lastname: lastname,
        manageremail: email,
        password: password,
        phonenumber: phonenumber,
        gender: gender

      }).then(res => console.log(res),
        alert("Manager added successfully"))
      navigate("/adminhome")
    }
    catch (error) {
      alert("User failed")
    }
  }
  function logout(e) {
    e.preventDefault();
    window.localStorage.removeItem('jwt');
    window.location.href = '/';
  }

  const validateForm = firstname.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && gender.length > 0 && phonenumber.length > 0;

  return (
    <div>
      <Sidebar />
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                    <Nav className="me-autos">
                        <Nav.Link onClick={(e) => logout(e)}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
      <div className="wrapper-inner-signup">
        <div className='row'>
          <center>
            <div className="wrapper-inner-b">
              <h3 style={{fontStyle:"oblique"}}><center>Add Manager</center></h3>
              <br />
              <div className='col'>
                <div>
                  <form onSubmit={AddManager}>
                    <div className='mb-3' >
                      <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique"  }}><strong>Firstname:</strong></label>
                      <input type='text' minLength={4} placeholder='Enter Manager Firstname' value={firstname} name='firstname' onChange={addHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique"  }}><strong>Lastname:</strong></label>
                      <input type='text' minLength={4} placeholder='Enter Manager Lastname' value={lastname} name='lastname' onChange={addHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{ textAlign: "left", float: "left",fontStyle:"oblique"  }}><strong>Email Id:</strong></label>
                      <input type='email' placeholder='Enter Manager Email Address' value={email} name='email' onChange={addHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique"  }}><strong>Password:</strong></label>
                      <input type='password' minLength={5} maxLength={20} placeholder='Enter Manager Password' value={password} name='password' onChange={addHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique"  }}><strong>Phonenumber:</strong></label>
                      <input type='number' minLength={10} maxLength={10} placeholder='Enter Manager Phonenumber' value={phonenumber} name='phonenumber' onChange={addHandler} className='form-control' />
                    </div>

                    <div className="mb-3">
                      <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique"  }} ><strong>Gender:</strong></label>
                      <Form.Select onChange={addHandler} name='gender' value={gender} aria-label="Default select example">
                        <option>Select Gender</option>
                        <option >Male</option>
                        <option >Female</option>
                      </Form.Select>
                    </div>


                    <div align="center">

                      <Button variant="secondary" type="submit" className="btn btn-info" disabled={!validateForm}>
                        Add Manager
                      </Button>{' '}

                      <Link to='/adminhome'>
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
export default AddManager;
