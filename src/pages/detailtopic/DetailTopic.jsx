import React, { useState } from 'react';
import './detailtopic.scss';
import { useLocation, Link } from 'react-router-dom';

function DetailTopic() {
    const location = useLocation();
    const { state } = location;
    const { englishVocab, vietnameseVocab, currentLesson, soundUrls } = state || {};
    console.log(soundUrls)

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const handlePlayAudio = () => {
        if (englishVocab && soundUrls) {
          const currentSoundUrl = soundUrls[currentWordIndex];
      
          if (currentSoundUrl) {
            const audio = new Audio(currentSoundUrl);
            audio.play();
          }
        }
      };
      

    const handleContinueClick = () => {
        if (englishVocab && currentWordIndex < englishVocab.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
        }
    };

    return (
        <div className="container">

            <div className="container_detail-topic">
                {/* ... */}
                <div className="detail-topic-content">
                    <h6>English</h6>
                    {englishVocab && (
                        <div>
                            <h5 className='voca_eng'>{englishVocab[currentWordIndex]}</h5>

                        </div>
                    )}

                    <h6>Vietnamese</h6>
                    {vietnameseVocab && <h5 className='voca_vi'>{vietnameseVocab[currentWordIndex]}</h5>}
                    <i className="fa fa-volume-up sound-icon" onClick={handlePlayAudio}></i>

                    {currentWordIndex < (englishVocab ? englishVocab.length : 0) - 1 && (
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleContinueClick}>
                            Continue
                        </button>
                    )}

                    <Link to="/topic" className="btn btn-secondary">
                        Back to Topic
                    </Link>
                </div>
            </div>

            

            

            

       
        </div>
    );
}

export default DetailTopic;
