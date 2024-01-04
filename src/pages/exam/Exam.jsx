
import React, { useEffect, useState } from "react";
import {  toast } from "react-toastify";
import "./exam.scss";
import AxiosClient from "../../api/AxiosClient";
import { useParams,Link } from "react-router-dom";

function Exam() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // Thời gian thi ban đầu là 10 phút
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [timer, setTimer] = useState(null);
  const { nameTopic } = useParams();

  let userData = localStorage.getItem("userData");
  if (userData) {
    userData = JSON.parse(userData);
  }
  // console.log(userData.id)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setIsTimeUp(true);
          submitAnswers(); // Tự động nộp bài khi hết thời gian
        }
        return prevTime - 1;
      });
      setTimer(timer)
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    AxiosClient.get(`/api/v1/listquestion?nameTopicexample=${nameTopic}`)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [nameTopic]);

  function handleAnswer(questionIndex, selectedAnswer) {
    if (!isTimeUp) {
      const correctAnswer = questions[questionIndex].answer;

      if (selectedAnswer === correctAnswer) {
        setScore((prevScore) => prevScore + 1);

        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[questionIndex] = selectedAnswer;
        setSelectedAnswers(newSelectedAnswers);
      }
    } else {
      // Hiển thị thông báo khi hết thời gian
      toast.error("The homework time has passed!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
    }
  }

  function submitAnswers() {
    const totalScore = questions.reduce((acc, question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const correctAnswer = question.answer;
      return acc + (selectedAnswer === correctAnswer ? 1 : 0);
    }, 0);

    AxiosClient.get(
      `api/v1/handle?Sroceuser=${totalScore}&iduser=${userData.id}&nametopic=${nameTopic}`
    )
      .then((res) => {
        console.log(res);
        setSubmitted(true);
        console.log(userData.id);
        clearInterval(timer);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function scoreQues() {
    return (
      <div className="score-container">
            {submitted && (
                <div className="score-value">
                    Score: {score}
                </div>
            )}
        </div>
    );
  }

  function renderQuestions() {
    if (Array.isArray(questions) && questions.length > 0) {
      return questions.map((question, index) => (
        <div key={index}>
          <div className="question">
            <div style={{ marginRight: "10px" }}>
              <strong className="amout-ques"> {index + 1} </strong>
            </div>{" "}
            <span className="span-question"> {question.question}</span>
          </div>
          {question.listanswers.map((answer, answerIndex) => (
            <div className="answer" key={answerIndex}>
              <div className="answer-answer">
                <input
                  type="radio"
                  name={`answer-${index}`}
                  id={`answer-${index}-${answerIndex}`}
                  onClick={() => handleAnswer(index, answer.answer)}
                />
              </div>
              <label htmlFor={`answer-${index}-${answerIndex}`}>
                {answer.answer}
              </label>
            </div>
          ))}
        </div>
      ));
    }
  }
  
  return (
    <div className="container" id="exam">
      <div className="back-button">
        <Link to="/listexam">
          <button className="back-button">
            <img width={30} height={30} src="/assets/icon/iconback.svg" alt="" />
            Back to List
          </button>
        </Link>
    </div>
        <h2>{nameTopic}</h2>
      <div className="container-exam">
        <div className="clock-and-score">
            {scoreQues()}
            <div className="clock" >
              <img
                width={50}
                height={50}
                src="/assets/icon/iconclock2.svg"
                alt=""
              />
              <span
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#69B4F9",
                 
                }}
              >
                {Math.max(0, Math.floor(timeRemaining / 60))}:
                {Math.max(0, timeRemaining % 60)}
              </span>
            </div>
          </div>
        <div className="list-answer">
          {renderQuestions()}
        </div>
          <div className="button-sub">
            <button className="submit-exam" onClick={submitAnswers} disabled={isTimeUp}>
             Submit
            </button>
          </div>       
      </div>
    </div>
  );
}

export default Exam;
