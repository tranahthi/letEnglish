import './login.scss'



function Login() {
    return (
        <div className="body_authen">
            <div className="center">
                <h1>Login</h1>
                <form method="post">
                    <div class="txt-field">
                        <input type="text"  required />
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div class="txt-field">
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <div class="pass"><a href="/forgetpassword">Forget Password?</a></div>
                    <input type="submit" value="Login" />
                    <div class="signup_link">
                        Not a member? <a href="/signup">Register</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;