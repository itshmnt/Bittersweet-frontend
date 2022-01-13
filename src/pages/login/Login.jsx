import { useRef } from "react";
import "./login.css";

export default function Login() {
    const email = useRef();
    const password = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        alert(email.current.value + password.current.value);
    }
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
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
