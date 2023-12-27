import AxiosClient from '../../api/AxiosClient';
import './profile.scss';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

function Profile() {
    const [activeTab, setActiveTab] = useState('#account-general');
    const [getInput , setInput] = useState("")

    let userData = localStorage.getItem("userData")
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const [contactEmail, setContactEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpValid, setIsOtpValid] = useState("");

    const [newPassword,setNewPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("");
    console.log(otp)
    
    const handleSend = async () => {
       AxiosClient.post(`/api/v1/requestuser?email=${contactEmail}`)
       .then(res => {
        console.log(res)
        setOtp(res.data)
       })
       .catch(error => console.log(error))
    };
    console.log(isOtpValid)
    const checkValidOtp =  () =>{
        if(String(isOtpValid) === String(otp)){
            AxiosClient.post(`/api/v1/handels?iduser=${userData.id}&mailpersonundersurveillance=${contactEmail}`)
            .then(res => {
                console.log(contactEmail)
                console.log(res)
                console.log("ok")
                toast.success("Giám sát thành công!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
            })
            .catch(error => console.log(error))
        }
    }
    console.log(newPassword)
    console.log(repeatPassword)
    // // Mock API functions (replace with your actual API calls)
    // const requestOtp = async (email) => {
    //     const response = await fetch(`/api/v1/requestuser?email=${email}`);
    //     return response.json();
    // };

    // const checkOtpValidity = async (email, enteredOtp) => {
    //     const response = await fetch(`/api/v1/checkotp?Email=${email}&EnteredOtp=${enteredOtp}`);
    //     return response.json();
    // };

    // const saveToDatabase = async (email) => {
    //     const response = await fetch(`/api/v1/handels?mail=${email}`);
    //     return response.json();
    // };

    // const fetchMonitoredEmails = async () => {
    //     const response = await fetch(`/api/v1/showview`);
    //     return response.json();
    // };
    const handleChangePassword = async() =>{
        if (newPassword !== repeatPassword) {
            // Hiển thị thông báo lỗi
            toast.error("Mật khẩu mới và mật khẩu lặp lại không khớp!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            return; // Dừng lại nếu có lỗi
          }
        try {
            const response = await AxiosClient.get(
              `/register/updatepass?iduser=${userData.id}&changeepass=${newPassword}`
            );
            console.log(response.data);
            // Xử lý logic sau khi thay đổi mật khẩu thành công
            toast.success("Mật khẩu đã được thay đổi thành công!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          } catch (error) {
            console.error(error);
            // Xử lý logic khi có lỗi xảy ra
            toast.error("Đã xảy ra lỗi khi thay đổi mật khẩu!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
    }
    return (
        <div class="container-fluid light-style flex-grow-1 container-p-y" id='id-account'>
            <h4 class="font-weight-bold py-3 mb-4">
                Account settings
            </h4>
            <div class="card overflow-hidden">
                <div class="row no-gutters row-bordered row-border-light">

                    <div class="col-md-3 pt-0">
                        <div class="list-group list-group-flush account-settings-links">
                            <a
                                className={`list-group-item list-group-item-action ${activeTab === '#account-general' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-general"
                                onClick={() => handleTabChange('#account-general')}
                            >General</a>
                            <a className={`list-group-item list-group-item-action ${activeTab === '#account-change-password' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-change-password"
                                onClick={() => handleTabChange('#account-change-password')}>Change password</a>
                            <a className={`list-group-item list-group-item-action ${activeTab === '#account-info' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-info"
                                onClick={() => handleTabChange('#account-info')}>Info</a>
                            {/* <a className={`list-group-item list-group-item-action ${activeTab === '#account-notifications' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-notifications"
                                onClick={() => handleTabChange('#account-notifications')}>Notifications</a> */}
                            <a className={`list-group-item list-group-item-action ${activeTab === '#account-notifications' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-dashborad"
                                onClick={() => handleTabChange('#account-dashborad')}>Dashboard</a>
                        </div>
                    </div>

                    <div class="col-md-9">
                        <div class="tab-content">

                            <div class={`tab-pane fade ${activeTab === '#account-general' ? 'show active' : ''}`} id="#account-general">
                                <div class="card-body media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt
                                        class="d-block ui-w-80"></img>
                                    <div class="media-body ml-4">
                                        <label class="btn btn-outline-primary">
                                            Upload new photo
                                            <input type="file" class="account-settings-fileinput"></input>
                                        </label> &nbsp;
                                        <button type="button" class="btn btn-default md-btn-flat">Reset</button>
                                        <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                                    </div>
                                </div>
                                <hr class="border-light m-0"></hr>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="form-label">Username</label>
                                        <input type="text" class="form-control mb-1" value=""></input>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control" value=""></input>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">E-mail</label>
                                        <input type="text" class="form-control mb-1" value=""></input>
                                        <div class="alert alert-warning mt-3">
                                            Your email is not confirmed. Please check your inbox.<br></br>
                                            <a href="javascript:void(0)">Resend confirmation</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class={`tab-pane fade ${activeTab === '#account-change-password' ? 'show active' : ''}`} id="account-change-password">
                                <div class="card-body pb-2">
                                    <div class="form-group">
                                        <label class="form-label">Current password</label>
                                        <input type="password"  class="form-control"></input>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">New password</label>
                                        <input type="password" class="form-control" onChange={(e) => setNewPassword(e.target.value)}></input>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" onChange={(e) => setRepeatPassword(e.target.value)}>Repeat new password</label>
                                        <input type="password" class="form-control"></input>
                                    </div>
                                </div>
                            </div>

                            <div class={`tab-pane fade ${activeTab === '#account-info' ? 'show active' : ''}`} id="account-info">
                                <div class="card-body pb-2">
                                    <div class="form-group">
                                        <label class="form-label">Bio</label>
                                        <textarea class="form-control"
                                            rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Birthday</label>
                                        <input type="text" class="form-control" value="Jan 1, 2001"></input>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">Country</label>
                                        <select class="custom-select">
                                            <option>USA</option>
                                            <option selected>Canada</option>
                                            <option>UK</option>
                                            <option>Germany</option>
                                            <option>France</option>
                                            <option selected>Vietnam</option>
                                        </select>
                                    </div>
                                </div>
                                <hr class="border-light m-0"></hr>
                                <div class="card-body pb-2">
                                    <h6 class="mb-4">Contacts</h6>
                                    <div class="form-group">
                                        <label class="form-label">Email</label>
                                       <input
                                            type="text"
                                            className="form-control"
                                            name='email'
                                            value={contactEmail}
                                            onChange={(e) => setContactEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <button onClick={handleSend}>Send</button>
                                    </div>
                                     <div class="form-group">
                                        <label class="form-label">OTP</label>
                                       <input
                                            type="text"
                                            className="form-control"
                                            name='otp'
                                            value={isOtpValid}
                                            onChange={(e) => setIsOtpValid(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <button onClick={checkValidOtp}>Send</button>
                                    </div>
                                </div>
                            </div>

                

                        </div>
                    </div>
                </div>
            </div>
            <div class="text-right mt-3">
                <button type="button" class="btn btn-primary" onClick={handleChangePassword}>Save changes</button>&nbsp;
                <button type="button" class="btn btn-default">Cancel</button>
            </div>
        </div>
    );
}

export default Profile;