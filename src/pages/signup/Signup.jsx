import { useState } from 'react';
import './signup.scss'
import AxiosClient from '../../api/AxiosClient';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Signup() {


    const navigate = useNavigate()
    const [getInput, setInput] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});

   
    function handleInput(e) {
        const { name, value } = e.target;
        setErrors({ ...errors, [name]: "" });
        setInput((state) => ({ ...state, [name]: value }));

        if (name === "email") {
            if (!isValidEmail(value)) {
                setErrors({ ...errors, [name]: "vui lòng nhập đúng định dạng email" })
            } else {
                setErrors({ ...errors, [name]: "" })
            }
        }
        if (name === "username") {
            if (!isValidUsername(value)) {
                setErrors({ ...errors, [name]: "Username chỉ được chứa ký tự chữ, số và dấu gạch dưới" });
            } else {
                setErrors({ ...errors, [name]: "" });
            }
        }
    }
    function isValidEmail(email) {
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailCheck.test(email)
    }
    function isValidUsername(username) {
        // Use a regular expression to check for valid characters
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        return usernameRegex.test(username);
    }
    function handleSubmit(e) {
        e.preventDefault();
        let errorSubmit = {};
        let flag = true;

        if (getInput.username === "") {
            errorSubmit.username = "Vui lòng nhập tên";
            flag = false;
        }
        if (getInput.email === "") {
            errorSubmit.email = "Vui lòng nhập email";
            flag = false;
        }
        if (getInput.password === "" ) {
            errorSubmit.password = "Vui lòng nhập mật khẩu";
            flag = false;
        }
        if (getInput.password.length <8 || getInput.password.length > 16  ) {
            errorSubmit.password = "Vui lòng nhap mat khau tu 8 - 16 ky tu";
            flag = false;
        }

        if (!flag) {
            setErrors(errorSubmit)
        } else {
            setErrors({})
            handleRegister()
        }
    }
    // let date = new Date()
    // console.log(date)
  

    function handleRegister() {
        // const date = new Date();

        // // Chuyển đổi sang múi giờ địa phương
        // const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
    
        AxiosClient.get(`/register/addAcount?Username=${getInput.username}&Bcryptpassword=${getInput.password}&Email=${getInput.email}&timeregister=${new Date()}`)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    toast.success("Đăng ký thành công!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                      });
                    navigate("/login")
                }else{
                    alert("looxi")
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    toast.error("Email đăng ký của bạn đã tồn tại!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                      });
                } else {
                    console.log(error);
                    alert('Lỗi kết nối hoặc server');
                }
            });


    }

    return (
        <div className="body_authen">
            <div className="center">
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <div class="txt-field">
                        <input type="text" name='username' onChange={handleInput} />
                        <span></span>
                        <label>Username</label>
                    </div>
                    {errors && <div className="error-message" style={{color:"red"}}>{errors.username}</div>}

                    <div class="txt-field">
                        <input type="email" name='email' onChange={handleInput} />
                        <span></span>
                        <label>Email</label>
                    </div>
                    {errors && <div className="error-message" style={{color:"red"}}>{errors.email}</div>}

                    <div class="txt-field">
                        <input type="password" name='password' onChange={handleInput} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    {errors && <div className="error-message" style={{color:"red"}}>{errors.password}</div>}
                    {/* <div class="txt-field">
                        <input type="password" name='confirmpassword' onChange={handleInput} />
                        <span></span>
                        <label>Confirm Password</label>
                    </div>
                    {errors && <div className="error-message">{errors.confirmPassword}</div>} */}


                    <div class="pass"><a href="/forgetpass">Forget Password?</a></div>
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