import { BrowserRouter, Routes, Route ,Router } from 'react-router-dom'
import './App.css';
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








function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/introduce' element={<Introduce />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgetpass' element={<ForgetPassword />}></Route>
        <Route path='/topic' element={<Topic />}></Route>
        <Route path='/modaltopic' element={<ModalTopic />}></Route>
        <Route path='/detailtopic' element={<DetailTopic />}></Route>
        <Route path='/listvideo' element={<ListVideo />}></Route>
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
