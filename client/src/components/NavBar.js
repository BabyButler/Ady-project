import React from 'react'
import{Navbar,Container,Nav,Form,NavDropdown,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
  const current_user = JSON.parse(localStorage.getItem('current_user'))
  const logout = () =>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
       <Navbar bg="primary" variant="dark">
            <Container>
                <a href="#home"><img width="312" height="96" src=
                "https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg"/>
                </a>
                <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                {current_user.role == 'admin' ? 
                <Nav.Link as={Link} to='/AdminProfile'>Profile</Nav.Link>
                : 
                <Nav.Link as={Link} to='/UserProfile'>Profile</Nav.Link>
                }
                </Nav>
                <Form className="d-flex">
                    {current_user ? 
                     <Button className="btnout" variant="dark" onClick={()=> logout()} >Logout</Button>
                     : 
                     <Link to="/SignIn" ><Button variant="dark">Login</Button></Link>
                     }
                    
                   
                </Form>
            </Container>
        </Navbar> 
    </div>
  )
}

export default NavBar