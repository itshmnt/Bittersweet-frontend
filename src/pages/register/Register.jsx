import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import "./register.css";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (password.current.value !== passwordAgain.current.value) {
            passwordAgain.current.setCustomValidity("Passwords are not matching!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user);
                history("/login");
            } catch(err) {
                alert(err);
            }
        }
    };
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
                    <form className="loginBox" onSubmit={handleClick}>
                        <input required placeholder="Username" ref={username} className="loginInput" />
                        <input type="email" required placeholder="Email" ref={email} className="loginInput" />
                        <input type="password" minLength="6" ref={password} required placeholder="Password" className="loginInput" />
                        <input type="password" minLength="6" ref={passwordAgain} required placeholder="Re-enter Password" className="loginInput" />
                        <button className="loginButton" type="submit" >Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
