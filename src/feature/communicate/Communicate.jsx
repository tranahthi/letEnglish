import AxiosClient from "../../api/AxiosClient";
import React, { useEffect, useState } from 'react';

function Communicate(){

    const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);

    // Gọi API để bắt đầu nhận dạng giọng nói
    // Sử dụng fetch hoặc thư viện HTTP request như axios
    AxiosClient.get(`/bot/chat/${text}`)
      .then(response => response.json())
      .then(data => {
        setText(data.transcript);
        setIsListening(false);
      })
      .catch(error => {
        console.error('Error during Speech to Text conversion:', error);
        setIsListening(false);
      });
  };

  const startSpeaking = () => {
    // Gọi API để chuyển đổi văn bản thành giọng nói
    // Sử dụng fetch hoặc thư viện HTTP request như axios
    AxiosClient.get(`/bot/chat/${text}`, {
    
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then(response => response.json())
      .then(data => {
        // Phát âm giọng nói
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(data.text);
        synth.speak(utterance);
      })
      .catch(error => {
        console.error('Error during Text to Speech conversion:', error);
      });
  };

  return (
    <div style={{marginTop:"100px"}}>
      <button onClick={startListening} disabled={isListening}>
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      <div>
        <strong>Text Result:</strong> {text}
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={startSpeaking}>Start Speaking</button>
    </div>
  );

}
export default Communicate