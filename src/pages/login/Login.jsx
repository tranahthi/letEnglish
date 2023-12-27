import { useState } from "react";
import "./login.scss";
import AxiosClient from "../../api/AxiosClient";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToatMessage from "../../components/toat-message/ToatMessage";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [getInput, setInput] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});




  function handleInput(e) {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setInput((state) => ({ ...state, [name]: value }));
  }

  function handleLoginSuccess(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
    toast.success("Đăng nhập thành công!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
   // Chuyển hướng sau khi đăng nhập
   navigate("/");
    onLogin(); // Thực hiện callback để cập nhật trạng thái đăng nhập
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    if (getInput.username === "") {
      errorSubmit.username = "Vui lòng nhập username";
      flag = false;
    }
    if (getInput.password === "") {
      errorSubmit.password = "Vui lòng nhập password";
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      const data = {
        username: getInput.username,
        password: getInput.password,
      };

      AxiosClient.post(
        `/authenticateTheUser?username=${getInput.username}&password=${getInput.password}`
      )
        .then((res) => {
          if (res.data.error) {
            setErrors(res.data.error);
            // showToast("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!", "error");
          } else {
            handleLoginSuccess(res.data);
           
          }
        })
        .catch((error) => {
          console.log(error);
          // showToast("Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại sau!", "error");
        });
    }
  }

  return (
    <div className="body_authen">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt-field">
            <input type="text" name="username" onChange={handleInput} />
            <span></span>
            <label>Username</label>
          </div>
          {errors && <div className="error-message" style={{color:"red"}}>{errors.username}</div>}
          <div className="txt-field">
            <input type="password" name="password" onChange={handleInput} />
            <span></span>
            <label>Password</label>
          </div>
          {errors && <div className="error-message" style={{color:"red"}}>{errors.password}</div>}

          <div className="pass">
            <a href="/forgetpass">Forget Password?</a>
          </div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="/signup">Register</a>
          </div>
        </form>

        {/* Container để hiển thị thông báo */}
        <ToastContainer />
        
      </div>
    </div>
  );
}

export default Login;
