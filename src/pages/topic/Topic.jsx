import './topic.scss'


function Topic() {
    return (
        <div class="wrapper">
            {/* <div class="sidebar">
                <img src={logoEshark}class="logo"alt="" />
                <ul>
                    <li><a href="/home"><FontAwesomeIcon icon={faHome} ></FontAwesomeIcon> Home</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Vocabulary</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Exam</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon> Video</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon> Communicate</a></li>
                    
                </ul> 
                
            </div> */}
            <div class="main_content">
                {/* <div class="header">
                <ul>
                    <li className='header_icon'><a href="#"></a><FontAwesomeIcon icon={faBell} ></FontAwesomeIcon> <a href="#"></a><FontAwesomeIcon icon={faUser} ></FontAwesomeIcon></li>
                </ul>
                </div> */}

                <div class="info">
                    <div className="continue-learning">
                    <h1 className="text-continue"> Continue learning </h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" class="img_continue_learning" alt="..."></img>
                    </div>

                <div className="topic-list"> <h2 className="text">Travel</h2>

                <div className="topic-item">
                    <a href="/topic/topicmodal"><img Link to ="/modaltopic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div> 

                <div className="topic-item">
                    <a href="/modaltopic"><img Link to ="/modaltopic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div>

                <div className="topic-item">
                    <a href="/modaltopic"><img Link to ="/modaltopic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div>

                <div className="topic-item">
                    <a href="/modaltopic"><img Link to ="/modaltopic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div>

                <div className="topic-list"> <h2 className="text">Education</h2>

                <div className="topic-item">
                    <a href="/topic/topicmodal"><img Link to ="/topic/topicmodal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div> 

                <div className="topic-item">
                    <a href="/topic/topicmodal"><img Link to ="/topic/topicmodal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div>

                <div className="topic-item">
                    <a href="/topic/topicmodal"><img Link to ="/topic/topicmodal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div> 

                <div className="topic-item">
                    <a href="/topic/topicmodal"><img Link to ="/topic/topicmodal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" className="img_topic_item"  alt="..."></img></a>
                </div>
        
        
                </div>
            </div>
            </div>
            </div>
    </div>
)
}

export default Topic;