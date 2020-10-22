import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Sergio Junca</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-user px-1' />
                  Profile
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/gallery'>
                <Nav.Link>
                  <i className='far fa-images px-1' />
                  Gallery
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/table'>
                <Nav.Link>
                  <i className='fas fa-table px-1' />
                  Table
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
