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
  // const [learningTopic, setLearningTopic] = useState(null);
  // const [learningLesson,setLearningLesson] = useState(null)

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
    // setLearningTopic(topic); // Set the current topic when a card is clicked
    // setLearningLesson(lesson);
    handleStartClick(wordId);
  };

  // const handleContinueLearning = () => {
  //   // Add logic to continue learning the current topic
  //   // For example, redirect to the detail page or handle it in your app's logic
  //   if (learningTopic && learningLesson) {
  //     // Add logic to continue learning the current topic and lesson
  //     console.log("Continue learning:", learningTopic, learningLesson);
  //     navigate(`/detailtopic/${learningTopic}/${learningLesson}`);
  //   }
  //   console.log("Continue learning:", currentTopic);
  // };

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

  const renderContinueLearning = () => {
    return (
      <div>
        <h3 className="text-continue-learning">Continue Learning</h3>
        <div className="continue-learning">
          <div className="learning-topic">
            <span>abc</span>
            <button className="btn btn-secondary">
              Continue
            </button>
          </div>
          {/* <div className="topic-image">
            <img src="/assets/image/anhtesst.jpg" alt="Topic" />
          </div> */}
        </div>
      </div>
    );
  };
  
  

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
        {renderContinueLearning ()}

        <h3 className='text-next'>Next</h3>
        <div className="topic-list">
          {renderData}
        </div>
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton style={{border:"none"}}>
            <Modal.Title className="modal-name-topic" style={{ color: "#69B4F9" }}>{currentTopic}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "450px", overflowY: "auto ", overflowX: "hidden" }} className='modal-body' >
            {renderVocabularyModal}
          </Modal.Body>
          <Modal.Footer style={{border:"none"}}>
            <Link to={`/detailtopic/${currentTopic}/${currentLesson}`} className="btn btn-secondary" style={{ margin: "auto ",padding:"10px" ,backgroundColor: "#69B4F9", border: "none",borderRadius:"30px", width: "150px", height: "40px" }} onClick={handleStartClick}>
              Start
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Topic;
