import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className='header'>
            <section className=''>
                <div className="header-inner ">
                    {/* <div className="row"> */}
                    <div className=" facebook-header-left">
                        <div className="logo-area">
                            <img src={logo} className='logo' alt="" />
                        </div>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Facebook"
                                className="me-2 search-field"
                                aria-label="Search"
                            />
                        </Form>
                    </div>
                    <div className="home-middle">
                        <div className='home-icon'>
                            <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 g28tu32o"
                                fill="currentColor" height="28" width="28">
                                <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29">
                                </path>
                            </svg>

                        </div>
                    </div>
                    <div className=" facebook-header-icon">


                        <div className='notification-icon'>
                            <svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 rs22bh7c"
                                fill="currentColor" height="28" width="28">
                                <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z">
                                </path>
                            </svg>

                        </div>

                        <div className='message-icon'>
                            <svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 rs22bh7c" fill="currentColor"
                                height="28" width="28">
                                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z">
                                </path>
                            </svg>

                        </div>





                    </div>





                    {/* </div> */}
                </div>
            </section>
        </div>
    );
};

export default Header;