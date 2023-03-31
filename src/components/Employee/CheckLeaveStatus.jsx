import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Container } from 'react-bootstrap'
import Sidebar from './SidebarEmployee'


export default function CheckLeaveStatus() {
  
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8085/Admin/gettoken/${window.localStorage.getItem('jwt')}`)
        .then(response => {
        axios.get(`http://localhost:8088/leave/get/all/${response.data}`)
        .then(response => {
          setdata(JSON.parse(JSON.stringify(response.data)))
        }, [])
  })})

function deleteleaverequest(id) {
  try{
    axios.delete(`http://localhost:8088/leave/delete/${id}`,
    {
      headers :{
        'Authorization' : "Bearer " + window.localStorage.getItem("jwt")
    }
  });
    setdata(data.filter(d => d.id !== id ));
  }
  catch(err){
    console.error(err);
  }
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
              <th>EmailId</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Reason For Leave</th>
              <th>Applied To</th>
              <th>Leave Status</th>
              <th>Cancel Request</th>
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
              
                    <td>    
                    <center>
                    <a href=' ' style={{color:"red"}} onClick={() => deleteleaverequest(employee.leaveid)}>cancel</a>
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














