import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import ListVideo from './pages/video/ListVideo';
import Introduce from './pages/introduce/Introduce';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ForgetPassword from './pages/forgetpass/ForgetPass';
import Topic from './pages/topic/Topic';
import ModalTopic from './pages/modaltopic/ModalTopic';
import DetailTopic from './pages/detailtopic/DetailTopic';
import VideoDetail from './pages/videodetail/VideoDetail';
import DetailChanel from './pages/detailchanel/DetailChanel';
import Profile from './pages/profile/Profile';
import Admin from './admin/Admin';
import Exam from './pages/exam/Exam';
import MyProgress from './pages/myprogresslearn/MyProgress';
import SavedVideo from './pages/myprogresslearn/SavedVideo';
import Communicate from './feature/communicate/Communicate';
import ToatMessage from './components/toat-message/ToatMessage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Test from './feature/test/Test';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  const HeaderWrapper = ({ children }) => {
    const location = useLocation();
    const excludedPaths = ['/login', '/signup', '/introduce', '/admin', '/forgetpass', '/detailtopic','/test'];


    if (excludedPaths.includes(location.pathname)) {
      return null; // Do not render the header for excluded paths
    }
    return <>{children}</>;
  };
  
  return (
    <>

      <HeaderWrapper>
        <Header isLoggedIn={isLoggedIn} />
      </HeaderWrapper>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpass" element={<ForgetPassword />} />

        <Route path="/topic" element={<Topic />} />
        <Route path="/modaltopic" element={<ModalTopic />} />
        <Route path="/detailtopic/:currentTopic/:currentLesson" element={<DetailTopic />} />


        <Route path="/listvideo" element={<ListVideo />} />
        <Route path="/chanel/list/:videoId" element={<VideoDetail />} />
        <Route path="/savedvideo" element={<SavedVideo />} />
        <Route path="/chanel/list/detail/:channelId" element={<DetailChanel />} />


        <Route path="/exam" element={<Exam />} />
        

        <Route path="/profile" element={<Profile />} />
        <Route path="/myprogress" element={<MyProgress />} />
        <Route path="/communicate" element={<Communicate />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/test' element={<Test/>}/>
      
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
