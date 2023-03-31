import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaEdit} from "react-icons/fa"
import {FaTrashAlt} from "react-icons/fa"
import  AutoLogout from "../components/AutoLogout";


export default function DashBoard() {
  
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8082/Employees/get')
    .then(response => {
      setdata(JSON.parse(JSON.stringify(response.data)))
    }, [])
  })
  // console.log(data)

  const editemployee = (d) => {
  let { id, firstname, lastname ,email, phonenumber} = d
  localStorage.setItem("ID", id)
  localStorage.setItem("FirstName", firstname)
  localStorage.setItem("LastName", lastname)
  localStorage.setItem("Email", email)
  localStorage.setItem("PhoneNumber", phonenumber)
  //localStorage.setItem("Password", password)


}

function deletefun(email) {
  try{
    axios.delete(`http://localhost:8082/Employees/delete/${email}`,
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
  <AutoLogout>
    <div>
      <Container>
      
      <h3 className='text-center'>Employee List</h3>
      {/* <Link to="/add-employee"> */}
      {/* <button className="btn btn-primary" onClick={addemployee}> Add employee</button> */}

      {/* </Link> */}
      <br />
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email id</th>
              <th>Phonenumber</th>
              
              <th>Update</th>
              <th>Delete</th>

            </tr>
          </thead>

          <tbody>
            {data.map((employee) => (
              <tr key={employee.id} >
                {/* <td>{localStorage.getItem("id")}</td> */}
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.phonenumber}</td>
                {/* <td>{employee.addressline1}</td>
                <td>{employee.addressline2}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td> */}
                <td>
                  <center>
                  <Link to={"/update/" + employee.email} >
                    <a href=' ' style={{color:"green"}}  onClick={() => editemployee(employee)} variant="dark" size='sm'><FaEdit/></a>
                  </Link>
                  </center>
                  </td>
                    <td>

                      

                    <center>
                    <a href=' ' style={{color:"red"}} onClick={() => deletefun(employee.email)}><FaTrashAlt/></a>
                    </center>
                  </td>
                {/* </td> */}
                {/* <td>
                  <button className="btn btn-info">Edit</button>
                  <button className="btn btn-info">Delete</button>
                </td> */}
              </tr>

            ))}


          </tbody>

        </table>
      </div>
      </Container>
    </div>
    </AutoLogout>
  )

}














