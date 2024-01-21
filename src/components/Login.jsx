import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [passwordType, setPasswordType] = useState('password'); 
    const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash/>);

    const handleToggle=()=>{
        if(passwordType==='password'){
            setPasswordType('text');
            setPasswordIcon(<FaEye/>);
        }else{
            setPasswordType('password');
            setPasswordIcon(<FaEyeSlash/>);
        }
    }

    return (
        <div className='main'>
            <div className="container">
                <form action="" className='myForm'>
                    <h1>Login</h1><br /><br />
                    <div className="inputWithIcon">
                        <FaUser className="icon" />
                        <input type="text" name="username" id="username" placeholder='Enter Username' />
                    </div><br />
                    <div className="inputWithIcon">
                        <span className='eyeIcon' onClick={handleToggle}>
                            {passwordIcon}
                        </span>
                        <FaLock className="icon" />
                        <input type={passwordType} name='password' id="password" placeholder='Enter Password'/>
                    </div><br /><br />
                    <input type="submit" value="Login" className='loginBtn' /><br /><br />
                    <p>Don't have an account? <a href="#register">Register</a></p><br />
                    <h6 className='title'>or</h6>

                </form>
            </div>
        </div>
    )
}

export default Login