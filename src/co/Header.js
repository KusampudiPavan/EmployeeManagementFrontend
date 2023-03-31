import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  function logout(e) {
    window.localStorage.removeItem('jwt')
    window.location.href = '/' 
  }

  let nav = useNavigate()

  return (

    <div>
      <Navbar bg="dark" variant="dark">

<Container>
    <NavbarBrand href="/"><center>Employee Management System</center></NavbarBrand>
    <Nav>
            {/* <Link className="btn btn-primary" to="/add">Add Employee</Link>{" "} */}
            {/* <Link className="btn btn-danger" to="/">Logout</Link> */}
            {
              window.localStorage.getItem('jwt') ? 

              <>
              <Nav.Link onClick={h => nav('/dashboard')}>Home</Nav.Link>&nsbp
              <Nav.Link onClick={c => nav('/calculator')}>Calculator</Nav.Link>&nsbp
              <Nav.Link onClick={e => nav('/todo')} >Todo</Nav.Link>&nsbp
              <Nav.Link onClick={e => logout(e)} >Logout <FiLogOut/></Nav.Link>&nsbp
              </>
         
              : null
            }
    </Nav>
    

</Container>

</Navbar>
        {/* <header >
          <nav >

            <div style={{ textAlign: 'absolute', backgroundColor: "black", position: 'center', color: 'white', height: 85 }}><h3><br/>Employee Management System</h3>
            {
              window.localStorage.getItem('jwt') ? 
              <Nav.Link onClick={e => logout(e)} >Logout</Nav.Link>
              : null
            }
            </div><br /><br />
          
          </nav>
        </header>   */}
    </div>
  )
}

export default Header