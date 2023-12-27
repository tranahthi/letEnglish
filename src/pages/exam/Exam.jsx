import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './exam.scss';
import AxiosClient from '../../api/AxiosClient';

function Exam() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const nameTopic = localStorage.getItem("nameTopic")
  console.log(nameTopic)

  useEffect(() => {
    // Gửi yêu cầu để lấy dữ liệu câu hỏi và câu trả lời từ cơ sở dữ liệu
    AxiosClient.get(`/api/v1/listquestion?nameTopicexample=${nameTopic}`)
      .then((res) => {
        console.log(res);
        setQuestions(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [nameTopic]);

  function handleAnswer(questionIndex, selectedAnswer) {
    const correctAnswer = questions[questionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    // Make a POST request to the API to save user's answer and score
    AxiosClient.get("/api/v1/handle", {
      questionIndex,
      selectedAnswer,
      score: score + (selectedAnswer === correctAnswer ? 1 : 0),
    })
      .then((res) => {
        console.log(res);
        // You can perform additional actions or state updates as needed
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function renderQuestions() {
    if (Array.isArray(questions) && questions.length > 0) {
      return questions.map((question, index) => (
        <div key={index}>
          <div className="question">
            <p>Câu {index + 1}: {question.question}</p>
          </div>

          {question.listanswers.map((answer, answerIndex) => (
            <div className="answer" key={answerIndex}>
              <input
                type="radio"
                name={`answer-${index}`}
                id={`answer-${index}-${answerIndex}`}
                onClick={() => handleAnswer(index, answer.answer)}
              />
              <label htmlFor={`answer-${index}-${answerIndex}`}>{answer.answer}</label>
            </div>
          ))}
        </div>
      ));
    }
  }

  return (
    <div className="container" id="exam">
      <h2>Bài thi</h2>
      {renderQuestions()}
      <p>Điểm số: {score}</p>
    </div>
  );
}

export default Exam;
