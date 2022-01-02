import "./register.css";

export default function Register() {
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
                    <div className="loginBox">
                        <input type="Email" placeholder="Email" className="loginInput" />
                        <input type="Email" placeholder="Username" className="loginInput" />
                        <input type="Password" placeholder="Password" className="loginInput" />
                        <input type="Password" placeholder="Re-enter Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
