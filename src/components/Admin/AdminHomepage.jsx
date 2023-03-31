import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaEdit} from "react-icons/fa"
import {FaTrashAlt} from "react-icons/fa"
import Sidebar from './SidebarAdmin'


export default function AdminHomepage() {
  
  const [data, setdata] = useState([])
  const [datas,setdatas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/adminemployee/get')
    .then(response => {
      setdata(JSON.parse(JSON.stringify(response.data)))
    }, [])
  })

  useEffect(() => {
    axios.get('http://localhost:8082/adminManager/get')
    .then(response => {
      setdatas(JSON.parse(JSON.stringify(response.data)))
    }, [])
  })

  const editemployee = (d) => {
  let {employeeid, firstname, lastname, email,phonenumber,manageremail,gender,password} = d
  localStorage.setItem("ID", employeeid)
  localStorage.setItem("FirstName", firstname)
  localStorage.setItem("LastName", lastname)
  localStorage.setItem("Email", email)
  localStorage.setItem("PhoneNumber", phonenumber)
  localStorage.setItem("ManagerEmail", manageremail)
  localStorage.setItem("Gender", gender)
  localStorage.setItem("Password", password)


}

function deletefunemployee(email) {
  try{
    axios.delete(`http://localhost:8081/adminemployee/delete/${email}`,
    {
      headers :{
        'Authorization' : "Bearer " + window.localStorage.getItem("jwt")
    }
  });
    setdata(data.filter(d => d.email !== email ));
  }
  catch(err){
    console.error(err);
  }
}

function deletefunmanager(email) {
  try{
    axios.delete(`http://localhost:8082/adminManager/delete/${email}`,
    {
      headers :{
        'Authorization' : "Bearer " + window.localStorage.getItem("jwt")
    }
  });
    setdata(data.filter(d => d.email !== email ));
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
      
      <h3 className='text-center' style={{fontFamily:"revert"}}>List Of Employees</h3>
      <br />
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee FirstName</th>
              <th>Employee LastName</th>
              <th>Employee EmailId</th>
              <th>Employee Phonenumber</th>
              <th>Employee Gender</th>
              <th>Assigned Manager</th>
              <th>Update Manager</th>
              <th>Delete Employee</th>

            </tr>
          </thead>

          <tbody>
            {data.map((employee) => (
              <tr key={employee.employeeid} >
                <td>{employee.employeeid}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.phonenumber}</td>
                <td>{employee.gender}</td>
                <td>{employee.manageremail}</td>
               
                <td>
                  <center>
                  <Link to={"/updatemanager/" + employee.email}>
                    <a href=' ' style={{color:"green"}}  onClick={() => editemployee(employee)} variant="dark" size='sm'><FaEdit/></a>
                  </Link>
                  </center>
                  </td>
                    <td>    
                    <center>
                    <a href=' ' style={{color:"red"}} onClick={() => deletefunemployee(employee.email)}><FaTrashAlt/></a>
                    </center>
                  </td>
    
              </tr>

            ))}


          </tbody>

        </table>
      </div>

      <h3 className='text-center' style={{fontFamily:"revert"}}>List Of Managers</h3>
      <br />
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Manager ID</th>
              <th>Manager FirstName</th>
              <th>Manager LastName</th>
              <th>Manager EmailId</th>
              <th>Manager Phonenumber</th>
              <th>Manager Gender</th>
              {/* <th>Update</th> */}
              <th>Delete Manager</th>

            </tr>
          </thead>

          <tbody>
            {datas.map((manager) => (
              <tr key={manager.managerid} >
                <td>{manager.managerid}</td>
                <td>{manager.firstname}</td>
                <td>{manager.lastname}</td>
                <td>{manager.manageremail}</td>
                <td>{manager.phonenumber}</td>
                <td>{manager.gender}</td>
               
                <td>
                  {/* <center>
                  <Link to={"/update/" + employee.email} >
                    <a href=' ' style={{color:"green"}}  onClick={() => editemployee(employee)} variant="dark" size='sm'><FaEdit/></a>
                  </Link>
                  </center>
                  </td>
                    <td> */}
                    <center>
                    <a href=' ' style={{color:"red"}} onClick={() => deletefunmanager(manager.manageremail)}><FaTrashAlt/></a>
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














