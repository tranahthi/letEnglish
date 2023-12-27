
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToatMessage = () => {
    toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

  return (
    <div>
      {/* Container để hiển thị thông báo */}
      <ToastContainer />
      <button onClick={ToatMessage}>test</button>

      {/* Gọi hàm hiển thị thông báo khi component được render */}
      
    </div>
  );
};

export default ToatMessage;