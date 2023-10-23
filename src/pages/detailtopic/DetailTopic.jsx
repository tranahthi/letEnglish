import React from 'react';
import './detailtopic.scss'




function DetailTopic() {
    return (
        <div className="">
            <div className="header">
                <div className="header_content">
                <a href="">English - Các địa điểm</a>
                <a className='exit' href="#"></a>
                </div>
            </div>

             <div className="container">
            <div className="count_lesson"></div>
            </div>

            {/*<div className="content_lesson">
                <div className="video_voca">
                    
                    <video src="https://static.memrise.com/uploads/babylon/1/videos/a+bus/medium/2.mp4#t=0.1">
                    </video>

                    <div className="eng">
                        <label>TIẾNG ANH</label>
                        <h2>a bus</h2>
                    </div>

                    <div className="eng">
                        <label>TIẾNG VIỆT</label>
                        <span>một chiếc xe buýt</span>
                    </div>

                    <div className="sound">
                        <label>AUDIO</label>
                        <span>``</span>
                    </div>
                    
                </div> 

            </div>*/}
<div className="container_full">
        <div className="container-eng">
            <div className="vocabulary">a bus
  
            <ul>
                    <a className='continue' href="#"></a>
            </ul>
            
            </div>

            <div className="noun">pronoun</div>
            <div className="vie">VIETNAMESE</div>
            <div className="mean">một chiếc xe buýt</div>
  
          <div className="sound">
              <span className="country-sound">UK</span>
              <span className="icon-sound"></span>
              <span className="phat-am"> /ɪt/</span> 
              <a href="#"></a>
              <span className="country-sound-2">US</span>
              <span className="icon-sound"> </span>
              <a href="#"></a>
              <span className="phat-am"> /ɪt/</span>
          </div>
        </div>
        {/* <div className="video_source">
            <video src="https://static.memrise.com/uploads/babylon/1/videos/a+bus/medium/2.mp4#t=0.1">
                    </video>
            </div> */}
            </div>



        </div>
    )
}

export default DetailTopic;
