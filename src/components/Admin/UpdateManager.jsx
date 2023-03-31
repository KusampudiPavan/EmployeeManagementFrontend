import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import {GiCancel} from 'react-icons/gi';
import {MdUpdate} from 'react-icons/md';
import Sidebar from './SidebarAdmin'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UpdateManager = () => {
    let navigate = useNavigate();
   const [employeeid, setID] = useState(0);
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [manageremail, setmanageremail] = useState('');
    const [gender, setgender] = useState('');
    const [password, setpassword] = useState('');
    const [data,setdata] = useState([])

    const disabledFunction =   manageremail.length>0;

    useEffect(() => {
       setID(localStorage.getItem('ID'))
        setfirstname(localStorage.getItem('FirstName'));
        setlastname(localStorage.getItem('LastName'));
        setemail(localStorage.getItem('Email'));
        setphonenumber(localStorage.getItem('PhoneNumber'));
        setmanageremail(localStorage.getItem('ManagerEmail'));
        setgender(localStorage.getItem('Gender'));
      setpassword(localStorage.getItem('Password'));
      
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8082/adminManager/get')
            .then(response => {
                setdata(JSON.parse(JSON.stringify(response.data)))
            }, [])
    })



    const updateform = () => {
        axios.put(`http://localhost:8086/employee/update/${email}`, {
            firstname:firstname,
            lastname:lastname,
            email:email,
            phonenumber:phonenumber,
            manageremail:manageremail,
            gender:gender,
            password:password
        },{
            headers :{
                'Authorization' : "Bearer " + window.localStorage.getItem("jwt")
            }
        })
        .then(() => {
            console.log("Updated")
        })
        navigate("/adminhome")
    }
    return (
      <div>
      <Sidebar />
      <div className="wrapper-inner-signup">
          <div className='row'>
              <center>
                  <div className="wrapper-inner-a-signup">
                      <h3><center>Update Employee</center></h3>
                      <br />
                      <div className='col'>
                          <div>
                              <form onSubmit={updateform} >
                                  <div className='mb-3' >
                                  <label style={{ textAlign: "left", float: "left" }} ><strong>Firstname:</strong></label>
                                      <input type='text' minLength={4} placeholder='Enter Employee Firstname' value={firstname} name='firstname'  className='form-control' />
                                  </div>
                                  <div className="mb-3">
                                  <label style={{ textAlign: "left", float: "left" }} ><strong>Lastname:</strong></label>
                                      <input type='text' minLength={4} placeholder='Enter Employee Lastname' value={lastname} name='lastname' className='form-control' />
                                  </div>
                                  <div className="mb-3">
                                  <label style={{ textAlign: "left", float: "left" }} ><strong>Email:</strong></label>
                                      <input type='email' placeholder='Enter Employee Email Address' value={email} name='email' className='form-control' />
                                  </div>
                                  <div className="mb-3">
                                  <label style={{ textAlign: "left", float: "left" }} ><strong>Password:</strong></label>
                                      <input type='password' minLength={5} maxLength={20} placeholder='Enter Employee Password' value={password} name='password'  className='form-control' />
                                  </div> 
                                  <div className="mb-3">
                                  <label style={{ textAlign: "left", float: "left" }} ><strong>Phonenumber:</strong></label>
                                      <input type='number' minLength={10} maxLength={10} placeholder='Enter Employee Phonenumber' value={phonenumber} name='phonenumber' className='form-control' />
                                  </div>

                                  {/* <div className="mb-3">
                                      <label><strong></strong></label>
                                      <input type='email' placeholder='Search Manager' value={manageremail} name='manageremail' onChange={(e)=> setmanageremail(e.target.value)} className='form-control' />
                                  </div> */}

                                  <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left" }} ><strong>Manager Email:</strong></label>
                                            <Form.Select onChange={(e)=> setmanageremail(e.target.value)} name='manageremail' value={manageremail} aria-label="Default select example">
                                                {/* <option>Select Manager</option> */}
                                                {data.map((item) =>
                                                    <option>{item.manageremail}</option>
                                                )}
                                            </Form.Select>

                                        </div>


                                  <div className="mb-3">
                                  <label style={{ textAlign: "left", float: "left" }} ><strong>Gender:</strong></label>
                                      <input type='text' placeholder='Select Gender' value={gender} name='gender'  className='form-control' />
                                  </div>
                                  

                                  <div align="center">
                                      <Button variant="secondary" type="submit" className="btn btn-info" disabled={!disabledFunction}>
                                          Update Employee
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
        
    );
}

export default UpdateManager