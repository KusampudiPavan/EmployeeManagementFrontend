import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
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
      <Navbar bg="black" variant="dark">

<Container>
    <NavbarBrand href="/" style={{marginLeft:"50px"}}>Employee Management System</NavbarBrand>
    <Nav>
      {
              window.localStorage.getItem('jwt') ? 

              <>
              {/* <Nav.Link onClick={h => nav('/')}>Home</Nav.Link>&nsbp */}
              {/* <Nav.Link onClick={e => logout(e)} >Logout <FiLogOut/></Nav.Link> */}
              null
              </>
              : 
              <>
              <Nav.Link onClick={h => nav('/')}>Home</Nav.Link>
              <Nav>
              <NavDropdown title="Login" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="/loginadmin"> AdminStaff Login</NavDropdown.Item>
                <NavDropdown.Item href="/loginemployee">Employee Login</NavDropdown.Item>
                <NavDropdown.Item href="/loginmanager">Manager Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>&nsbp
            </>
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