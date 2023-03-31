import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import Sidebar from './SidebarAdmin'



const AddEmployeeRegistration = () => {
    let navigate = useNavigate();
    const [getdata, setgetdata] = useState([])
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        phonenumber: "",
        manageremail: ""
    })


    const { firstname, lastname, email, password, gender, phonenumber, manageremail } = data

    const addHandler = fh => {
        setData({ ...data, [fh.target.name]: fh.target.value })
    }

    useEffect(() => {
        axios.get('http://localhost:8082/adminManager/get')
            .then(response => {
                setgetdata(JSON.parse(JSON.stringify(response.data)))

            }, [])
    })

    const AddEmployee = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:8081/adminemployee/addemployee", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                phonenumber: phonenumber,
                manageremail: manageremail,
                gender: gender

            }).then(res => console.log(res),
                alert("Employee added successfully"))
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

    const validateForm = firstname.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && gender.length > 0 && phonenumber.length > 0 && manageremail.length > 0;

    return (
        <div className="ba">
            <Sidebar />
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                    <Nav className="me-autos">
                        <Nav.Link onClick={(e) => logout(e)}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

            <div className="wrapper-inner-signup" id="baa">
                <div className='row'>
                    <center>
                        <div className="wrapper-inner-b">
                            <h3 style={{fontStyle:"oblique"}}><center>Add Employee</center></h3>
                            <br />
                            <div className='col'>
                                <div>
                                    <form onSubmit={AddEmployee} >


                                        <div className='mb-3' >
                                            <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique" }} ><strong>Employee Firstname:</strong></label>
                                            <input type='text' minLength={4} placeholder='Enter Employee Firstname' value={firstname} name='firstname' onChange={addHandler} className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique"  }} ><strong>Employee Lastname:</strong></label>
                                            <input type='text' minLength={4} placeholder='Enter Employee Lastname' value={lastname} name='lastname' onChange={addHandler} className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left",fontStyle:"oblique" }}><strong>Email Id:</strong></label>
                                            <input type='email' placeholder='Enter Employee Email Address' value={email} name='email' onChange={addHandler} className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left",fontStyle:"oblique"  }} ><strong>Password:</strong></label>
                                            <input type='password' minLength={5} maxLength={20} placeholder='Enter Employee Password' value={password} name='password' onChange={addHandler} className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left",fontStyle:"oblique"  }} ><strong>Phonenumber:</strong></label>
                                            <input type='number' minLength={10} maxLength={10} placeholder='Enter Employee Phonenumber' value={phonenumber} name='phonenumber' onChange={addHandler} className='form-control' />
                                        </div>

                                        <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left",fontStyle:"oblique"  }} ><strong>Gender:</strong></label>
                                            <Form.Select  onChange={addHandler} name='gender' value={gender} aria-label="Default select example">
                                                <option>Select Gender</option>
                                                <option >Male</option>
                                                <option >Female</option>
                                            </Form.Select>
                                        </div>

                                        <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left" ,fontStyle:"oblique"  }} ><strong>Manager Email:</strong></label>
                                            <Form.Select onChange={addHandler} name='manageremail' value={manageremail} aria-label="Default select example">
                                                <option>Select Manager</option>
                                                {getdata.map((item) =>
                                                    <option>{item.manageremail}</option>
                                                )}
                                            </Form.Select>

                                        </div>
                                        <div align="center">
                                            <Button variant="secondary" type="submit" className="btn btn-info" disabled={!validateForm}>
                                                Add Employee
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

        </div >
    )
}
export default AddEmployeeRegistration;
