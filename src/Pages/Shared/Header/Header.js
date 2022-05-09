import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
      }
  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fw-bold' href="/home"><span className='text-danger'>Car</span>Dealer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            {
              user && <>
              <Nav.Link as={Link} to="/addcars">Add Cars</Nav.Link>
              <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
              </>
            }

            {
               user ?
               <button className='btn btn-link bg-danger text-light text-decoration-none' onClick={handleSignOut}>Log out</button>
           : 
                
                <Nav.Link  href="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
