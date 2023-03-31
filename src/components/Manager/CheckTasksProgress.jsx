import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Container } from 'react-bootstrap'
import Sidebar from './SidebarManager'


export default function CheckTasksProgress() {
  
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
        .then(response => {
        axios.get(`http://localhost:8090/task/get/${response.data}`)
        .then(response => {
          setdata(JSON.parse(JSON.stringify(response.data)))
        }, [])
  })})

// function deleteleaverequest(id) {
//   try{
//     axios.delete(`http://localhost:8088/leave/delete/${id}`,
//     {
//       headers :{
//         'Authorization' : "Bearer " + window.localStorage.getItem("jwt")
//     }
//   });
//     setdata(data.filter(d => d.id !== id ));
//   }
//   catch(err){
//     console.error(err);
//   }
// }


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
              <th>Task ID</th>
              <th>Assigned Task To</th>
              <th>Your Email Id</th>
              <th>Title</th>
              <th>Task Description</th>
              <th>Task CloseDate</th>
              <th style={{color:"green"}}>Status</th>
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
                <td style={{color:"green"}} >{employee.status}%</td>
              
                    {/* <td>    
                    <center>
                    <a href=' ' style={{color:"red"}} onClick={() => deleteleaverequest(employee.leaveid)}>cancel</a>
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














