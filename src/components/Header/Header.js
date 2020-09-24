import React, { useContext } from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <Container>
                <Navbar>
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo"/>
                        </Link>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="search-bar ml-5">
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                        <input type="text" placeholder="Search Your Destination...." className="form-control text-secondary search-box" />
                        </Form>
                            <Link className='nav-link ml-5 text-white' to="/">News</Link>
                            <Link className='nav-link ml-5 text-white' to="/destination">Destination</Link>
                            <Link className='nav-link ml-5 text-white' to="/">Blog</Link>
                            <Link className='nav-link ml-5 text-white' to="/">Contact</Link>
                            <Link to="/login" className="btn login-btn ml-5">Login</Link>  
                            <button onClick={() => setLoggedInUser({})} className="btn login-btn  ml-5">Sign Out</button>                     
                    </Navbar.Collapse>
                </Navbar>
            </Container>   
        </div>
    );
};

export default Header;