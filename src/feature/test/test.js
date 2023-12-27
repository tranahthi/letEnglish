import React, { useEffect, useRef, useState } from 'react';

const Test = () => {
    const videoRef = useRef(null);
    const [subtitles, setSubtitles] = useState('');
    const [listening, setListening] = useState(false);

    const handleStartListening = () => {
        setListening(true);
        const recognition = new window.SpeechRecognition();

        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSubtitles(transcript);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.start();
    };

    useEffect(() => {
        // Gọi hàm khi component đã mount
        handleStartListening();

        // Làm sạch trình dọn sau khi component unmount (componentWillUnmount)
        return () => {
            const recognition = new window.SpeechRecognition();
            recognition.abort();
        };
    }, []); // Dependency array rỗng để đảm bảo chỉ chạy một lần khi component được mount

    return (
        <div>
            <video ref={videoRef} controls />
            <button onClick={handleStartListening} disabled={listening}>
                {listening ? 'Listening...' : 'Start Listening'}
            </button>
            <div>
                <h3>Subtitles</h3>
                <p>{subtitles}</p>
            </div>
        </div>
    );
};

export default Test;
