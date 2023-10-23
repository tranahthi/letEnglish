import './forgetpass.scss'


function ForgetPassword() {
    return (
<div className="body_authen">
        <div className="center">
            <h1>Forget Password</h1>
            <form method="post">
                 <p>
                    Oh dear. You forgot your password.
                    Don't worry though, we'll get you back to learning a language in no time.
                    But first, let's reset your password.
                </p>

                <div class="txt-field">
                    <input type="email" required/>
                    <span></span>
                    <label>Email</label>
                </div>


                {/* <div class="pass">Forget Password?</div> */}
                <input type="submit" value="Reset Password" />
                <div class="signup_link">
                    Have a account? <a href="#">Sign in</a>
                </div>
            </form>
        </div>
        </div>
 )
}

export default ForgetPassword;