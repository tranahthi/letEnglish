import { BrowserRouter, Routes, Route } from 'react-router-dom';
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










function App() {
  const shouldDisplayHeader = (path) => {
    const excludedPaths = ['/login', '/signup', '/introduce'];
    return !excludedPaths.includes(path);
  };

  return (
    <BrowserRouter>
      {shouldDisplayHeader(window.location.pathname) && <Header />}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpass" element={<ForgetPassword />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/modaltopic" element={<ModalTopic />} />
        <Route path="/detailtopic/:currentTopic/:currentLesson" element={<DetailTopic />} />
        <Route path="/listvideo" element={<ListVideo />} />
        <Route path="/chanel/list/:videoId" element={<VideoDetail />} />
        {/* <Route path="/chanel/list/detail/:channelId" element={<DetailChanel/>}/> */}

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;