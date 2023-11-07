import './signup.scss'

function Signup() {
    return (
        <div className="body_authen">
        <div className="center">
            <h1>Register</h1>
            <form method="post">
                <div class="txt-field">
                    <input type="text" required/>
                    <span></span>
                    <label>Username</label>
                </div>

                <div class="txt-field">
                    <input type="email" required/>
                    <span></span>
                    <label>Email</label>
                </div>

                <div class="txt-field">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>

                <div class="pass">Forget Password?</div>
                <input type="submit" value="Sign up" />
                <div class="signup_link">
                    Have a account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Signup;