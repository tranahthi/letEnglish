
import axios from 'axios';
import './topic.scss';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Topic() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [currentTopic, setCurrentTopic] = useState("");
    const [currentLesson, setCurrentLesson] = useState("");
    const [getTopic, setTopic] = useState([]);
    


   

    console.log(currentTopic)
    console.log(currentLesson)
    useEffect(() => {
        axios.get("http://172.20.10.8:8081/topic/topicmodal")
            .then((res) => {
                console.log(res.data);
                setTopic(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCardClick = (topic, lesson) => {
        setShowModal(true);
        setCurrentTopic(topic);
        setCurrentLesson(lesson);
    };

    function renderData() {
        if (Array.isArray(getTopic) && getTopic.length > 0) {
            return getTopic.map((topicData, index) => (
                <div className="topic-item" key={index}>
                    <h3 className="topic-name">{topicData.name_topic}</h3>
                    <div className="card-deck">
                        {topicData.name_lesson.map((lesson, lessonId) => (
                            <div className="card" onClick={() => handleCardClick(topicData.name_topic, lesson)} key={lessonId}>
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{lesson}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ));
        }
    }

    function renderVocabularyModal() {
        if (Array.isArray(getTopic) && getTopic.length > 0) {
            const currentTopicData = getTopic.find((topic) => topic.name_topic === currentTopic);

            if (currentTopicData) {
                const currentLessonIndex = currentTopicData.name_lesson.indexOf(currentLesson);

                if (currentLessonIndex !== -1) {
                    // Kiểm tra xem currentTopicData.voca_eng có phải là mảng không
                    if (Array.isArray(currentTopicData.voca_eng)) {
                        const englishVocab = currentTopicData.voca_eng;
                        const vietnameseVocab = currentTopicData.voca_vi;
                        

                        return (
                            <div className='modal-voca'>
                                <h5 className="lesson-name">{currentLesson}</h5>
                                <ul className='list-voca'>
                                    {englishVocab.map((eng, index) => (
                                        <li key={index}>
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
        }
        return null;
    }

    

    const handleStartClick = () => {
        const currentTopicData = getTopic.find((topic) => topic.name_topic === currentTopic);
        if (currentTopicData) {
            const englishVocab = currentTopicData.voca_eng;
            const vietnameseVocab = currentTopicData.voca_vi;
            const soundUrls = currentTopicData.sound;
            console.log(englishVocab)
            console.log(vietnameseVocab) 
            console.log(soundUrls)

            navigate(`/detailtopic/${currentTopic}/${currentLesson}`, {
                state: {
                    englishVocab,
                    vietnameseVocab,
                    currentLesson,
                    soundUrls,
                },
            });
        }
    };



    return (
        <div className="container topic">
            <div className="btn_group">
                <button type="button" className="btn btn-primary">Learn</button>
                <button type="button" className="btn btn-primary">Exam</button>
            </div>
            <div className="main_content">
                <div className="topic-list">
                    {renderData()}
                </div>
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-name-topic" style={{ color: "#69B4F9" }}>{currentTopic}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        {renderVocabularyModal()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={`/detailtopic/${currentTopic}/${currentLesson}`} className="btn btn-secondary" onClick={handleStartClick}>
                            Start
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    );
}

export default Topic;






