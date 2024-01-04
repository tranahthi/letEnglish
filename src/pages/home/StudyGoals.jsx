import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./studygoal.scss";

const StudyGoals = () => {
  const [showNumberModal, setShowNumberModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(5);

  const handleShowNumberModal = () => setShowNumberModal(true);
  const handleCloseNumberModal = () => setShowNumberModal(false);

  const handleNumberSelection = (number) => {
    setSelectedNumber(number);
    handleCloseNumberModal();
    setShowConfirmationModal(true);
  };

  const handleConfirm = () => {
    // Thực hiện các hành động khi người dùng xác nhận
    setShowConfirmationModal(false);
  };

  return (
    <div className="col-md-4 content__middle" id="div-choose-word">
        <div className=" top-choose-word text-center">
            <h5 className="title-choose ">Chọn số từ để học trong ngày</h5>
            <button className="choose-word" style={{border:"none"}} onClick={handleShowNumberModal}>
                <img width={40} height={40} src="/assets/icon/iconpen.svg" alt="" />
            </button>
        </div>

      <div className="selected-number-display">
        <p style={{fontSize:"50px"}}>{selectedNumber}</p>
      </div>

      {/* Modal chọn số từ */}
      <Modal show={showNumberModal} onHide={handleCloseNumberModal} centered >
        <Modal.Header closeButton style={{border:"none"}}>
          <Modal.Title className="tag-amount-word">
            <h3 className="tag">Chọn số từ</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="btn-group button-group" role="group" >
            <button
              type="button"
              className={`btn ${selectedNumber === 5 ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handleNumberSelection(5)}
            >
              5
            </button>
            <button
              type="button"
              className={`btn ${selectedNumber === 10 ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handleNumberSelection(10)}
            >
              10
            </button>
            <button
              type="button"
              className={`btn ${selectedNumber === 15 ? "btn-primary" : "btn-secondary"}`}
              onClick={() => handleNumberSelection(15)}
            >
              15
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal xác nhận "Đã hiểu" */}
      <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} centered >
        <Modal.Header closeButton style={{border:"none"}}>
          
        </Modal.Header>
        <Modal.Body>
          <p>Mục tiêu của bạn thay đổi</p>
        </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
          
          <Button variant="primary" onClick={handleConfirm} >
            Đã hiểu
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudyGoals;
