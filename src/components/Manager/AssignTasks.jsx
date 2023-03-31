import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Sidebar from './SidebarManager'


const AssignTasks = () => {
  let navigate = useNavigate();
  const [datas,setdatas] = useState([])
  const [data, setData] = useState({
    employeeemailid: "",
    manageremail:  window.localStorage.getItem('ManagerEmail'),
    title: "",
    task: "",
    closedate: "",
    status: "0",
   
  })

 
  
  useEffect(()=>{
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
    .then(response => {
      axios.get(` http://localhost:8087/ManagerCheck/get/${response.data}`)
         .then(responses => {
            setdatas(responses.data);
         })
         .catch(error =>{
            console.log(error);
         });
        })
        },[]);

  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
      .then(response => {
        window.localStorage.setItem('ManagerEmail',response.data)
        
      })
  }, []);


  const { employeeemailid, manageremail, title, task, closedate, status } = data

  const AssignHandler = fh => {
    setData({ ...data, [fh.target.name]: fh.target.value })
  }

  const ApplyLeave = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8090/task/add", {
        employeeemailid: employeeemailid,
        manageremailid: manageremail,
        title: title,
        task: task,
        closedate: closedate,
        status: status

      }).then(res => console.log(res),
        alert("Task Assigned"))
      navigate("/managerhome")
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
              <h3><center>Assign Task</center></h3>
              <br />
              <div className='col'>
                <div>
                  <form onSubmit={ApplyLeave}>
                  
                    <div className="mb-3">
                                            <label style={{ textAlign: "left", float: "left" }} ><strong>Employee Email:</strong></label>
                                            <Form.Select onChange={AssignHandler} name='employeeemailid' value={employeeemailid} aria-label="Default select example">
                                                <option>Select Employee</option>
                                                {datas.map((item) =>
                                                    <option>{item.split(",")[3]}</option>
                                                )}
                                            </Form.Select>

                                        </div>

                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Manager Email:</strong></label>
                      <input type='email' placeholder='Enter Email' value={manageremail} name='manageremail' className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Title:</strong></label>
                      <input type='text' placeholder='Enter title' value={title} name='title' onChange={AssignHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Task:</strong></label>
                      <input type='text' minLength={5} placeholder='Enter Task' value={task} name='task' onChange={AssignHandler} className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Closedate:</strong></label>
                      <input type='date' placeholder='Date' value={closedate} name='closedate' onChange={AssignHandler}  className='form-control' />
                    </div>

                    {/* <div className="mb-3">
                      <label style={{textAlign:"left",float:"left"}}><strong>Status:</strong></label>
                      <input type='text' placeholder='Status' value={status} name='status' className='form-control' />
                    </div> */}


                    <div align="center">

                      <Button variant="secondary" type="submit" className="btn btn-info">
                        Assign Task
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
export default AssignTasks;
