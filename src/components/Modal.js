import React from 'react';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <embed src={require('./cv.pdf').default} type="application/pdf" width="70%" height="70%" />
      </div>
    </div>
  );
};

export default Modal;
