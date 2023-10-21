import { BrowserRouter, Routes, Route ,Router } from 'react-router-dom'
import './App.css';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import ListVideo from './pages/video/ListVideo';


function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/listvideo' element={<ListVideo />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
