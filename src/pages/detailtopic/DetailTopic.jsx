import React from 'react';
import './detailtopic.scss'




function DetailTopic() {
    return (
        <div className="container">
            

            

            

            <div className="container_detail-topic">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="container_topic">
            <div className="detail-topic-content">
                <h6>English</h6>
                <h5 className='voca_eng'>a bus</h5>
                <h6>Vietnamese</h6>
                <h5 className='voca_vi'>xe buýt</h5>
                <a className="sound" id="icon" href="#">
                    <img src="/assets/icon/sound.svg" className='sound-icon'></img>
                </a>
            </div>

            
            <button type="button" class="btn btn-primary btn-lg">Continue</button>
            
            
            

            </div>
            </div>

        </div>
    )
}

export default DetailTopic;
