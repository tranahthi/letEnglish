

import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import AxiosClient from "../../api/AxiosClient";
import "./communicate.scss";

const Communicate = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [ask, setAsk] = useState("");
  const [botResponses, setBotResponses] = useState([]);
  const [username, setUsername] = useState("");

  // Create a ref to store the recognition object
  const recognitionRef = useRef(null);
console.log(ask)
  useEffect(() => {
    // Fetch username from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUsername(userData.userName);
      connectToChat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Initialize the recognition object
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";
  }, []);

  const connectToChat = () => {
    const socket = new SockJS("http://192.168.1.13:8081/javatechie");
    const client = Stomp.over(socket);
    client.connect({}, onConnected, onError);
    setStompClient(client);
  };

  const onConnected = () => {
    if (stompClient) {
      stompClient.subscribe("/topic/public", onMessageReceived);
      stompClient.send(
        "/app/chat.register",
        {},
        JSON.stringify({ sender: username, type: "JOIN" })
      );
      console.log("Connected to WebSocket");
    } else {
      console.error("Stomp client is null. Unable to subscribe to topics.");
    }
  };

  const onError = (error) => {
    console.error(
      "Could not connect to WebSocket server. Please refresh this page to try again!",
      error
    );
  };

  const sendMessage = async () => {
    if (ask && stompClient) {
      const chatMessage = {
        sender: username,
        content: ask,
        type: "CHAT",
      };

      stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));

      const response = await AxiosClient.get(`/bot/chat/${ask}`);
      const data = response.data;
      console.log("Bot:", data);
      setBotResponses((prevBotResponses) => [...prevBotResponses, data]);
      textToSpeech(data)
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: username, content: ask },
      ]);
      setMessage("");
    }
  };

  const startRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      startSpeechRecognition();
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    stopSpeechRecognition();
    sendMessage();
  };

  function onMessageReceived(payload) {
    const message = JSON.parse(payload.body);
    // setBotResponses((prevBotResponses) => [...prevBotResponses, message.content]);
    // console.log(message.content)
    console.log(message.sender)
  }

  const startSpeechRecognition = () => {
    console.log("Speech recognition started");

    const recognition = recognitionRef.current;

    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log("Transcript:", transcript);
      setAsk(transcript);
    });

    recognition.addEventListener("end", () => {
      console.log("Speech recognition ended");
      stopRecording();
    });

    recognition.start();
  };

  const stopSpeechRecognition = () => {
    const recognition = recognitionRef.current;
    recognition.abort();
  };

  const textToSpeech = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
  };

  return (
    <div className="container" id="communicate">
      <div className="row">
        <div className="button-start">
          <button onClick={connectToChat}>Start</button>
        </div>

        <div className="background col-md-12">
          <div className="container-bot">
            <div className="message-bot-user">
              <div className="message-user">
                <ul>
                  {messages.map((msg, index) => (
                    <li key={index}>
                      <span>{msg.sender}:</span> <span>{msg.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="message-bot">
              <ul>
            {botResponses.map((botResponse, index) => (
                    <li key={index}>
                      <span>Bot: {botResponse}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="send-message">
              <input
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={sendMessage}>Send</button>
            </div> */}
          </div>
        </div>

        <div>
          <button onClick={isRecording ? stopRecording : startRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Communicate;

