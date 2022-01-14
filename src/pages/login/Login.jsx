import { useContext } from "react";
import { useRef } from "react";
import { loginCall } from '../../apiCalls';
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import "./login.css";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value},dispatch);
    };
    console.log(user);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Bittersweet</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Bittersweet!
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick} >
                        <input type="email" placeholder="Email" required className="loginInput" ref={email} />
                        <input type="password" placeholder="Password" required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" size="20px" /> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">{isFetching ? <CircularProgress color="inherit" size="20px" /> : "Create a new Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
