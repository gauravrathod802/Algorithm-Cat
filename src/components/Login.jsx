import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='main'>
            <div className="container">
                <form action="" className='myForm'>
                    <h1>Login</h1>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="username" id="username" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="text" name="password" id="password" /><br /><br />
                    <input type="button" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login