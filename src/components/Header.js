import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(buttonRef.current, {
      y: -180,
      duration: 3,
      delay: 1,
      ease: "elastic.out(6, 0.1)"
    });
  }, []);

  return (
    <div className="header">
      <button id="myButton" ref={buttonRef}>
        <FaDownload /> &nbsp;CV
      </button>
    </div>  
  );
};

export default Header;
