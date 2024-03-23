import React from 'react';
import style from './LocationModal.module.css';

const LocationModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={`${style.modalOverlay}`}>
      <div className={`${style.modal} col-md-8`}>
        <div className="text-end">
        <button className={`${style.modalClose} rounded-pill`} onClick={onClose}>
          &times;
        </button>
        </div>
        <div className={`${style.modalContent}`}>{children}</div>
        <button className='btn-primary btn' onClick={onClose}>Confirm</button>
      </div>
    </div>
  );
};

export default LocationModal;
