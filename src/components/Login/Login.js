import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import googleLogo from '../../images/icon/google.png';
import fbLogo from '../../images/icon/fb.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, initializeLoginFramework, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';

const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        first: '',
        second: '',
        email: '',
        password: '',
        confirmPassword: '',
        err: '',
        success: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res, true);
        })
    };

    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
            handleResponse(res, true);
        })
    };

    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }

    const handleBlur = (event) => {
        let isFieldValid = true;
        if(event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    };

    const handleSubmit = (event) => {
        if(user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
            .then(res => {
                handleResponse(res, true);
            })
        }
        if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                handleResponse(res, true);
            })
        }
        event.preventDefault();
    };

    return (
        <div>
            <Container>
            <div className="login mt-5">
                    <div className="row">
                        <h3 className="login-title mb-4">{newUser ? 'Create an account' : 'Login'}</h3>
                        <form onSubmit={handleSubmit} className="login-form">
                            {newUser && <input onBlur={handleBlur} className="form-control" name="first" type="text" placeholder="First Name"/>}
                            {newUser && <input onBlur={handleBlur} className="form-control" name="second" type="text" placeholder="Last Name"/>}
                            <input onBlur={handleBlur} className="form-control" type="email" name="email" placeholder="Username or Email" required/>
                            <input onBlur={handleBlur} className="form-control" type="password" name="password" placeholder="Password" required/>
                            {newUser && <input onBlur={handleBlur} className="form-control" name="confirmPassword" type="password" placeholder="Confirm Password"/>}
                            { !newUser &&
                                <div className="d-flex login-alert">
                                    <div className="login-remember">
                                        <input style={{ width: '18px' }} type="checkbox" />
                                        <label className="ml-2">Remember Me</label>
                                    </div>
                                    <div className="mt-2">
                                        <a href="#" className="yellow">Forget Password</a>
                                    </div>
                                </div>
                            }
                            <input className="btn btn-block p-3 mt-4" type="submit" value={newUser ? 'Create an account' : 'Login'}/>
                            {newUser ? <p className="text-center mt-4">Already have an account? <a onClick={() => setNewUser(!newUser)} name="newUser" className="yellow" href="#">Login</a></p> : <p className="text-center mt-4">Don't have an account? <a onClick={() => setNewUser(!newUser)} name="newUser" className="yellow" href="#">Create an account</a></p>}
                            <p className="text-center mt-2" style={{color: 'red'}}>{user.err}</p>
                            {user.success && <p className="text-center mt-2" style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                        </form>
                    </div>
            </div>
            <div className="social-login text-center">
                <p className="or mt-3">Or</p>
                <div className="google-signIn">
                    <a onClick={googleSignIn} className="btn btn-block pt-2 pb-0">
                        <img className="icon" src={googleLogo} alt=""/>
                        <p className="text-center pt-1 pb-0 mb-2">Continue with Google</p>
                    </a>
                </div>
                <div className="fb-signIn mt-2">
                    <a onClick={fbSignIn} className="btn btn-block pt-2 pb-0">
                        <img className="icon" src={fbLogo} alt=""/>
                        <p className="text-center pt-1 pb-0 mb-2">Continue with Facebook</p>
                    </a>
                </div>
            </div>
            </Container>
        </div>
        
    );
};

export default Login;