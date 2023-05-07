import React, { useEffect, useRef, useState } from 'react';
import cv from './cv.pdf';
import gsap from 'gsap';
import { FaDownload } from 'react-icons/fa';
import Modal from './Modal';

const Header = () => {
  const buttonRef = useRef(null);
  const [downloaded, setDownloaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    gsap.from(buttonRef.current, {
      y: -180,
      duration: 3,
      delay: 1,
      ease: "elastic.out(6, 0.1)"
    });
  }, []);

  const handleDownloadClick = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 5000);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="header">
      <button href={cv} download id="myButton" ref={buttonRef} onClick={downloaded ? null : handleDownloadClick}>
        {downloaded ? 'Downloaded' : (modalOpen ? 'Close Modal' : 'Open Modal')}
      </button>
      {modalOpen && (
        <Modal onClose={handleModalClose} size="70%">
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{ backgroundColor: 'transparent', border: 'none', color: 'red', cursor: 'pointer', fontSize: '24px' }} onClick={handleModalClose}>X</button>
          </div>
          <iframe src={cv} style={{ width: '100%', height: 'calc(100vh - 80px)' }} />
        </Modal>
      )}
    </div>
  );
};

export default Header;
