import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sidebar from './SidebarEmployee'




export default function CheckTasks() {
  
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
        .then(response => {
        axios.get(`http://localhost:8091/tasks/get/${response.data}`)
        .then(response => {
          setdata(JSON.parse(JSON.stringify(response.data)))
        }, [])
  })})

  const updatetask = (d) => {
    let {taskid,status} = d
    localStorage.setItem("taskid", taskid)
    localStorage.setItem("status", status)
  }

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
              <th>Your Task Id</th>
              <th>Your Email ID</th>
              <th>Manager Email Id</th>
              <th>Title</th>
              <th>Assigned Task</th>
              <th>Close Date</th>
              <th style={{color:"green"}}>Status</th>
              <th  style={{color:"green"}}>Update Progress</th>
            </tr>
          </thead>

          <tbody>
            {data.map((employee) => (
              <tr key={employee.taskid} >
                <td>{employee.taskid}</td>
                <td>{employee.employeeemailid}</td>
                <td>{employee.manageremailid}</td>
                <td>{employee.title}</td>
                <td>{employee.task}</td>
                <td>{employee.closedate}</td>
                <td style={{color:"green"}}>{employee.status}%</td>
              
                <td>
                  <center>
                  <Link to={"/updatetasks/" + employee.taskid}>
                    <Button className="btn btn-success" onClick={() => updatetask(employee)}  size='sm'>Update</Button>
                  </Link>
                  </center>
                  </td>
    
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














