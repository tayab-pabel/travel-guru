import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Home.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="home">
            <div className='bg'></div>
            <>
                <Container>
                   <Navbar>
                        <Navbar.Brand href="#home">
                            <img className="logo" src={logo} alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="search-bar ml-5">
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                        <input type="text" placeholder="Search Your Destination...." className="form-control text-secondary search-box" />
                        </Form>
                            <Navbar.Brand className='ml-5 text-white' href="#home">News</Navbar.Brand>
                            <Navbar.Brand className='ml-5 text-white' href="#home">Destination</Navbar.Brand>
                            <Navbar.Brand className='ml-5 text-white' href="#home">Blog</Navbar.Brand>
                            <Navbar.Brand className='ml-5 text-white' href="#home">Contact</Navbar.Brand>
                            <Button className='login-btn ml-5'>Login</Button>                         
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </>
        </div>
    );
};

export default Home;