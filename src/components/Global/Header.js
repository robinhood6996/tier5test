import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className='header'>
            <section>
                <div className="header-inner">
                    <Navbar bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand className=''>
                                <div className="logo-area">
                                    <img src={logo} className='logo' alt="" />
                                </div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search Facebook"
                                        className="me-2 search-field"
                                        aria-label="Search"
                                    />
                                </Form>
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Notification</Nav.Link>
                                    <Nav.Link href="#action2">Message</Nav.Link>
                                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown> */}

                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </section>
        </div>
    );
};

export default Header;