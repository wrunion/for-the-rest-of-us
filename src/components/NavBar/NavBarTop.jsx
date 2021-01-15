import React, { Fragment } from 'react';
// import NavBar from 'react-bootstrap/NavBar';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

const NavBarTop = () => {
  return (
    <Fragment>
      {/* <Container> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Resources</Nav.Link>
          <Nav.Link href="#features">Languages</Nav.Link>
          <Nav.Link href="#pricing">Accessbility</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search the site" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      {/* </Container> */}
    </Fragment>
  );
}

export default NavBarTop;