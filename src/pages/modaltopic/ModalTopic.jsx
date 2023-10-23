
import './modaltopic.scss'



function ModalTopic() {
    return (
        <div class="vocabulary_content">
            {/* <div class="header">
                <ul>
                    <a className='exit' href="/home"><FontAwesomeIcon icon={faX} ></FontAwesomeIcon> </a>
                </ul>
            </div> */}

            <div className="modal-container">

                <div className="modal-container-inside">
                    <h2 className="title-name-topic"> DU LỊCH</h2>
                    <h1 className='name_lessson'>Các địa điểm</h1>

                    <a className='continue_learning' to href="/topicdetail">Start</a>

                        <li>
                            <span class='voca-eng'>a bus</span>
                            <span class='voca-vi'>một chiếc xe buýt</span>
                        </li>

                        <li>
                            <span class='voca-eng'>a bus stop</span>
                            <span class='voca-vi'>trạm xe buýt</span>
                        </li>

                        <li>
                            <span class='voca-eng'>a train</span>
                            <span class='voca-vi'>một chiếc tàu</span>
                        </li>

                        <li>
                            <span class='voca-eng'>a station</span>
                            <span class='voca-vi'>trạm; bến</span>
                        </li>

                        
                        
                </div>       
            </div>
        



        </div>
    )
}

export default ModalTopic;
