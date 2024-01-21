import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEye, FaEyeSlash,FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import{BsTwitterX} from 'react-icons/bs';

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
                    <p>Don't have an account? <a href="#register">Sign up</a></p><br />
                    <h4 className='title'>or</h4><br />
                    <p style={{textAlign: 'center'}}>Sign up using</p><br />
                    <div className="social">
                    <a href="#google" className='google'><FcGoogle /></a>
                    <a href="#twitter" className='twitter'><BsTwitterX /></a>
                    <a href="#facebook" className='facebook'><FaFacebook /></a>
                    <a href="#linkedin" className='linkedin'><FaLinkedin /></a>
                    </div>
                </form>
                <div className="image">
                    <h1>Welcome  back</h1>
                    <hr />
                    <p>Login to continue to your account.</p>
                </div>
            </div>
        </div>
    )
}

export default Login