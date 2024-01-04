import React, { useState, useEffect } from 'react';
import './detailtopic.scss';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import AxiosClient from '../../api/AxiosClient';
import { toast } from 'react-toastify';
function DetailTopic() {
    const location = useLocation();
    const { state } = location;
    const { wordData, currentLesson, currentTopic, soundUrls } = state || {};
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [colorProgress, setColorProgress] = useState(0);
    // const [showCompletionMessage, setShowCompletionMessage] = useState(false);
    const [favoriteWords, setFavoriteWords] = useState([]);
    // console.log(soundUrls);
    // console.log(wordData);
    // console.log(currentWordIndex);
    console.log(wordData)
    const navigate = useNavigate()


    useEffect(() => {
        const storedFavoriteWords = localStorage.getItem('listWord');
        if (storedFavoriteWords) {
            setFavoriteWords(JSON.parse(storedFavoriteWords));
        }
    }, []);
    console.log(favoriteWords)



    

    let userData = localStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
    }
    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    
        if (wordData) {
            const wordId = wordData[currentWordIndex].id;
            console.log(wordId)
            

            AxiosClient.post(`/api/v1/listword?iduser=${userData.id}`)
            .then(res =>{
                console.log(res)
                let dataWordCheck = res.data
                const isWordInMemory = Array.isArray(dataWordCheck) && dataWordCheck.some(word =>word.idvocabulary === wordId);
                console.log(isWordInMemory)
                if (isWordInMemory) {
                    // Nếu từ đã có trong danh sách, hiển thị thông báo
                    setIsFavorite(false)
                     // Hiển thị toast message
                    toast.error('The word is already in your saved words list.', {
                        position: 'top-right',
                        autoClose: 3000, // Đóng tự động sau 3 giây
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    // Nếu từ chưa có trong danh sách, thêm hoặc xóa từ khỏi danh sách
                    if (!isFavorite) {
                         // Add word to memory
                         AxiosClient.post(`/api/v1/addmemory?iduser=${userData.id}&idword=${wordId}`)
                         .then((res) => {
                             console.log(res);
                            //  // Cập nhật danh sách từ đã lưu trong local storage
                            //  localStorage.setItem("listWord", JSON.stringify(res.data));
                         })
                         .catch((error) => console.log(error));
                        } else {
                        // Remove word from memory
                        AxiosClient.post(`/api/v1/deletememory?iduser=${userData.id}&idword=${wordId}`)
                            .then((res) => {
                                console.log(res);
                                // // Cập nhật danh sách từ đã lưu trong local storage
                                // localStorage.setItem("listWord", JSON.stringify(res.data));
                            })
                            .catch((error) => console.log(error));
                    }
                }
            })
            .catch(error => console.log(error))
        }
    }
    

    const handlePlayAudio = () => {
        if (wordData && soundUrls) {
            const currentSoundUrl = soundUrls[currentWordIndex];

            if (currentSoundUrl) {
                const audio = new Audio(currentSoundUrl);
                audio.play();
            }
        }
    };
    const handleContinueClick = () => {
        if (wordData && currentWordIndex < wordData.length - 1) {
            const word = wordData[currentWordIndex];
            console.log(word)

              // Lấy danh sách từ vựng đã học từ localStorage
        const allLearnedWords = JSON.parse(localStorage.getItem('allLearnedWords')) || {};

        // Kiểm tra xem user ID đã tồn tại trong danh sách chưa
        if (!allLearnedWords[userData.id]) {
            allLearnedWords[userData.id] = [];
        }

        // Thêm từ vựng mới vào danh sách của user
        allLearnedWords[userData.id].push(word);

        // Lưu lại danh sách từ vựng đã học
        localStorage.setItem('allLearnedWords', JSON.stringify(allLearnedWords));
            setCurrentWordIndex(currentWordIndex + 1);
            // Tăng màu của thanh div color
            setColorProgress(colorProgress + 5 * (25 / wordData.length));
            setIsFavorite(false)
        } else {
            //post lên 1 cái bảng mới
        }
    };

  
    const handleClose = () => {
        navigate(`/topic`);
    };
    return (
        <div className=" detailtopic">
            <div className='header-detail-topic'>
                <div className="header-content">
                    <div className="header-left">
                        <div className="lesson-topic-info">
                            <a href="/">{currentTopic} - {currentLesson} </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <img src="/assets/icon/iconclose.svg" alt="close" title='close' onClick={handleClose} />
                    </div>
                </div>
            </div>

            <div className='sub-detail'>
                
                <div className='progress-line'>
                    <div className='lining'>
                        <div className='color' style={{ width: `${colorProgress}%` }}></div>
                    </div>
                </div>
                <div className='container_detail-topic'>
                    <div className='detail-topic-content'>
                        <div className='sub-detail-topic'>
                            <div className='detail-topic-eng'>
                                {wordData && (
                                    <div className="box-eng" style={{width:"310px"}}>
                                        <label htmlFor="">English</label>
                                        <h5 className="voca_eng">{wordData[currentWordIndex].eng_voca}</h5>
                                    </div>
                                )}
                            </div>
                            <div className='detail-topic-vi'>
                                {wordData && (
                                    <div className="box-vi">
                                        <label htmlFor="">Vietnamese</label>
                                        <h5 className="voca_vi">{wordData[currentWordIndex].vi_voca}</h5>
                                    </div>
                                )}
                            </div>
                            <div className='line'>
                            </div>

                            <div className="box-sound">
                                <label htmlFor="">Sound</label>
                                <i  className="fa fa-volume-up sound-icon" onClick={handlePlayAudio}></i>
                            </div>
                        </div>
                    </div>
                    <div className=" btn-save ">
                        <button
                            type="button"
                            className={`img-btn-save ${isFavorite ? 'favorite' : ''}`}
                            onClick={handleToggleFavorite}
                        >
                            <img
                                title='save'
                                className="heart-icon"
                                src={isFavorite ? '/assets/icon/iconheart-red.svg' : '/assets/icon/iconheart.svg'}
                                alt=""
                            />
                        </button>
                    </div>


                    <div className=" btn-continue">
                            {currentWordIndex < (wordData ? wordData.length : 0) - 1 && (
                                <button type="button" className="btn btn-primary btn-lg" onClick={handleContinueClick}>
                                    Continue
                                </button>
                            )}
                            <button type="button" className="btn  btn-secondary btn-lg">
                                {/* /${currentTopic}/${currentLesson}`*/}
                                <Link to={`/topic`} className="link-to-topic" style={{textDecoration:"none" ,color:"#ffff"}}>
                                    Back to Topic
                                </Link>
                            </button>
                        </div>
                </div>


            </div>


        </div>
    );
}

export default DetailTopic;


