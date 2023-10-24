import './topic.scss'
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Topic() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCardClick = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className='container topic'>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">Learn</button>
                    <button type="button" className="btn btn-primary">Exam</button>
                </div>

                <div className="main_content">
                    <div className="continue-learning">
                        <h3 className="text-continue-learning">Continue learning</h3>
                        <div className="card" onClick={handleCardClick}>
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Name lesson</h5>
                            </div>
                        </div>
                    </div>

                    <div className="topic-list">
                        <div className="topic-item">
                            <h3 className="topic-name">Education</h3>
                            <div class="card-deck">

                                <div class="card" onClick={handleCardClick}>
                                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
                                    <div class="card-body">                                         <h5 class="card-title">Name lesson</h5>                                     </div>
                                </div>

                                <div class="card " onClick={handleCardClick}>
                                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
                                    <div class="card-body">                                         <h5 class="card-title">Name lesson</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="topic-item">
                            <h3 className="topic-name">Education</h3>
                            <div class="card-deck">

                                <div class="card " onClick={handleCardClick}>
                                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Name lesson</h5>
                                    </div>
                                </div>

                                <div class="card " onClick={handleCardClick}>
                                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Name lesson</h5>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title className='modal-name-topic'>Education</Modal.Title>
                            
                        </Modal.Header>
                        <Modal.Body>
                        <h5 className='name_lessson'>Các địa điểm</h5>
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
                        </Modal.Body>
                        <Modal.Footer>
                        <Link to="/detailtopic" className="btn btn-secondary" onClick={handleCloseModal}>
    Start
  </Link>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    );
}

export default Topic;






{/* // function Topic() { 



//     return (
//         <>
//             <div className='container topic'>

//                 <div class="btn-group">
//                     <button type="button" class="btn btn-primary">Learn</button>
//                     <button type="button" class="btn btn-primary">Exam</button>
//                 </div>

//                 <div class="main_content">

//                     <div className="continue-learning">
//                         <h3 classname="text-continue-learning">Continue learning</h3>
//                         <div class="card">
//                             <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap" data-toggle="modal" data-target="#exampleModal"></img>
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="topic-list">
//                         <div className="topic-item">
//                             <h3 className="topic-name">Education</h3>
//                             <div class="card-deck">

//                                 <div class="card ">
//                                     <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                     </div>
//                                 </div>

//                                 <div class="card ">
//                                     <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="topic-item">
//                             <h3 className="topic-name">Education</h3>
//                             <div class="card-deck">

//                                 <div class="card ">
//                                     <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                     </div>
//                                 </div>

//                                 <div class="card ">
//                                     <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEC6BvqEGZfkwufxPA1ljZvgmQawFVqmWIQ&usqp=CAU" alt="Card image cap"></img>
//                                     <div class="card-body">
//                                         <h5 class="card-title">Card title</h5>
//                                     </div>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>

//                 </div>


//                 </div>



//         </>
//     )
// }

// export default Topic;

*/}