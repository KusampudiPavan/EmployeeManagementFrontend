import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Sidebar from './SidebarEmployee'


const ApplyAddLeave = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    employeeemail: window.localStorage.getItem('EmployeeEmail'),
    fromdate: "",
    todate: "",
    leavereason: "",
    leavestatus: "Pending",
    manageremail:  window.localStorage.getItem('ManagerEmail'),
  })

  useEffect(() => {
    axios.get(`http://localhost:8086/employee/getassignedmanager/${window.localStorage.getItem('EmployeeEmail')}`)
      .then(response => {
        window.localStorage.setItem('ManagerEmail',response.data)
        console.log(response.data)
      })
  }, []);
 


  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
      .then(response => {
        window.localStorage.setItem('EmployeeEmail',response.data)
        
      })
  }, []);


  const { employeeemail, fromdate, todate, leavereason, leavestatus, manageremail } = data

  const LeaveHandler = fh => {
    setData({ ...data, [fh.target.name]: fh.target.value })
  }

  const ApplyLeave = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8088/leave/addleave", {
        employeeemail: employeeemail,
        fromdate: fromdate,
        todate: todate,
        leavereason: leavereason,
        leavestatus: leavestatus,
        manageremail: manageremail

      }).then(res => console.log(res),
        alert("Leave Applied"))
      navigate("/employeehome")
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

  const validateForm =  fromdate.length > 0 && todate.length > 0 && leavereason.length > 0;

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
            <div className="wrapper-inner-a-signup">
              <h3><center>Apply Leave</center></h3>
              <br />
              <div className='col'>
                <div>
                  <form onSubmit={ApplyLeave}>
                    <div className='mb-3' >
                      <label style={{textAlign:"left",float:"left"}}><strong>Employee Email:</strong></label>
                      <input type='email'  placeholder="Email" value={employeeemail} name='employeeemail' className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>From Date:</strong></label>
                      <input type='date' minLength={4} placeholder='Enter fromdate' value={fromdate} name='fromdate' onChange={LeaveHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>To Date:</strong></label>
                      <input type='date' placeholder='Enter todate' value={todate} name='todate' onChange={LeaveHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Reason:</strong></label>
                      <input type='text' minLength={5} placeholder='Enter Reason For Leave' value={leavereason} name='leavereason' onChange={LeaveHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Status:</strong></label>
                      <input type='text' placeholder='Leave Status' value={leavestatus} name='leavestatus' className='form-control' />
                    </div>

                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Manager Email:</strong></label>
                      <input type='email' placeholder='Select Manager' value={manageremail} name='manageremail' className='form-control' />
                    </div>


                    <div align="center">

                      <Button variant="secondary" type="submit" className="btn btn-info" disabled={!validateForm}>
                        Apply Leave
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
export default ApplyAddLeave;
