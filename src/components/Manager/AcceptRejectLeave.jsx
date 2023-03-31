import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sidebar from './SidebarManager'


export default function AcceptRejectLeave() {
  
  const [data, setdata] = useState([])
  const [AppLeavestatus, setAppleavestatus] = useState('Approved');
  const [NoLeavestatus, setNoleavestatus] = useState('NotApproved');

  function ApproLeave(e,id){
    e.preventDefault();
    axios.put(`http://localhost:8089/acceptreject/update/${id}`, {
      leavestatus: AppLeavestatus
    }).then(res => {
      alert("Done")
    })
  }

  function NotApproLeave(s,id){
    s.preventDefault();
    axios.put(`http://localhost:8089/acceptreject/update/${id}`, {
      leavestatus: NoLeavestatus
    }).then(res => {
      alert("Done")
    })
  }


  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
        .then(response => {
        axios.get(`http://localhost:8089/acceptreject/getbymanager/${response.data}`)
        .then(response => {
          setdata(JSON.parse(JSON.stringify(response.data)))
        }, [])
  })})

  return (
  // <AutoLogout>
    <div>
      <Sidebar/>
      <Container>
      
      <h3 className='text-center' style={{fontFamily:"revert"}}></h3>
      <br />
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee Email ID</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Reason For Leave</th>
              <th>Manager Email Id</th>
              <th>Leave Status</th>
              <th>Update Status</th>
              {/* <th style={{color:"green"}}>Status</th>
              <th  style={{color:"green"}}>Update Progress</th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((employee) => (
              <tr key={employee.leaveid} >
                <td>{employee.employeeemail}</td>
                <td>{employee.fromdate}</td>
                <td>{employee.todate}</td>
                <td>{employee.leavereason}</td>
                <td>{employee.manageremail}</td>
                <td>{employee.leavestatus}</td>
                {window.localStorage.setItem('LeaveStatus',employee.leavestatus)}                   
                <td>
                  <center>
                    <Button variant="success" size='sm' onClick={(e) => ApproLeave(e,employee.leaveid)}>Accept</Button>
                    <Button variant="danger" size='sm' onClick={(s) => NotApproLeave(s,employee.leaveid)}>Reject</Button>
                  </center>
                </td>
                {/* <td>
                  <center>
                  <Link to={"/updatetasks/" + employee.taskid}>
                    <Button className="btn btn-success" onClick={() => updatetask(employee)}  size='sm'>Update</Button>
                  </Link>
                  </center>
                  </td> */}
    
              </tr>

            ))}


          </tbody>

        </table>
      </div>
      </Container>
    </div>
    // </AutoLogout>
  )

}














