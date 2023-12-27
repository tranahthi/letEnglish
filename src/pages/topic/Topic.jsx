import React, { useEffect, useState, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AxiosClient from '../../api/AxiosClient';
import './topic.scss';

const Topic = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentLesson, setCurrentLesson] = useState("");
  const [getTopic, setTopic] = useState([]);
  console.log(getTopic)
  console.log(currentTopic)
  localStorage.setItem("nameTopic" , JSON.stringify(currentTopic))
  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        const response = await AxiosClient.get("/topic/topicmodal");
        setTopic(response.data);
      } catch (error) {
        console.error("Error fetching topic data:", error);
      }
    };

    fetchTopicData();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCardClick = (topic, lesson, wordId) => {
    setShowModal(true);
    setCurrentTopic(topic);
    setCurrentLesson(lesson);
    handleStartClick(wordId);
  };

  const renderData = useMemo(() => {
    if (Array.isArray(getTopic) && getTopic.length > 0) {
      return getTopic.map((topicData, index) => (
        <div className="topic-item" key={index}>
          <h3 className="topic-name">{topicData.name_topic}</h3>
          <div className="card-deck">
            {topicData.lession.map((lesson, lessonId) => (
              <div className="card" onClick={() => handleCardClick(topicData.name_topic, lesson.name_lesson, lesson.listword[0].id)} key={lessonId}>
                <img className="card-img-top" src={topicData.image} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">{lesson.name_lesson}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    }
    return <p>No topics available.</p>;
  }, [getTopic]);

  const renderVocabularyModal = useMemo(() => {
    if (Array.isArray(getTopic) && getTopic.length > 0) {
      const currentTopicData = getTopic.find((topic) => topic.name_topic === currentTopic);
      if (currentTopicData) {
        const currentLessonData = currentTopicData.lession.find((lesson) => lesson.name_lesson === currentLesson);
        if (currentLessonData && Array.isArray(currentLessonData.listword)) {
          const englishVocab = currentLessonData.listword.map((word) => word.eng_voca);
          const vietnameseVocab = currentLessonData.listword.map((word) => word.vi_voca);

          return (
            <div className='modal-voca'>
              <h5 className="lesson-name">{currentLesson}</h5>
              <ul className='list-voca'>
                {englishVocab.map((eng, index) => (
                  <li className='list-eng-vi' key={index}>
                    <span className="voca-eng">{eng}</span>
                    <span className="voca-vi">{vietnameseVocab[index]}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      }
    }
    return null;
  }, [getTopic, currentTopic, currentLesson]);

  const handleStartClick = () => {
    const currentTopicData = getTopic.find((topic) => topic.name_topic === currentTopic);
    if (currentTopicData) {
      const currentLessonData = currentTopicData.lession.find((lesson) => lesson.name_lesson === currentLesson);
      if (currentLessonData) {
        const wordData = currentLessonData.listword.map((word) => ({
          id: word.id,
          eng_voca: word.eng_voca,
          vi_voca: word.vi_voca,
        }));

        const soundUrls = currentLessonData.sound;

        navigate(`/detailtopic/${currentTopic}/${currentLesson}`, {
          state: {
            wordData,
            currentTopic,
            currentLesson,
            soundUrls,
          },
        });
      }
    }
  };

  return (
    <div className="container topic">
      <div className="main_content">
        <div className="topic-list">
          {renderData}
        </div>
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title className="modal-name-topic" style={{ color: "#69B4F9" }}>{currentTopic}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "450px", overflowY: "auto ", overflowX: "hidden" }} className='modal-body' >
            {renderVocabularyModal}
          </Modal.Body>
          <Modal.Footer>
            <Link to={`/detailtopic/${currentTopic}/${currentLesson}`} className="btn btn-secondary" style={{ margin: "auto ", backgroundColor: "#69B4F9", border: "none", width: "150px", height: "40px" }} onClick={handleStartClick}>
              Start
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Topic;
