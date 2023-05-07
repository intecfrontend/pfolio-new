import React, { useState } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { BsGeoAlt } from 'react-icons/bs';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActiveLink = (to) => {
    setActiveLink(to);
  }

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <Link to='home' className={`alink cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-link ${activeLink === 'home' ? 'active' : ''}`} smooth={true} spy={true} offset={200} onSetActive={() => handleSetActiveLink('home')}>
            <BiHomeAlt />
          </Link>

          <Link to='about' className={`alink cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-link ${activeLink === 'about' ? 'active' : ''}`} smooth={true} spy={true} onSetActive={() => handleSetActiveLink('about')}>
            <BiUser />
          </Link>

          <Link to='services' className={`alink cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-link ${activeLink === 'services' ? 'active' : ''}`} smooth={true} spy={true} onSetActive={() => handleSetActiveLink('services')}>
            <BsClipboardData />
          </Link>

          <Link to='work' className={`alink cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-link ${activeLink === 'work' ? 'active' : ''}`} smooth={true} spy={true} onSetActive={() => handleSetActiveLink('work')}>
            <BsBriefcase />
          </Link>

          <Link to='location' className={`alink cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-link ${activeLink === 'location' ? 'active' : ''}`} smooth={true} spy={true} onSetActive={() => handleSetActiveLink('location')}>
            <BsGeoAlt />
          </Link>

          <Link to='contact' className={`alink cursor-pointer w-[60px] h-[60px] flex items-center justify-center nav-link ${activeLink === 'contact' ? 'active' : ''}`} smooth={true} spy={true} onSetActive={() => handleSetActiveLink('contact')}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
