import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';
// import { BiGeoAlt } from 'bootstrap-icons-react';
// import { Bi } from 'bootstrap-icons-react';
import { BsGeoAlt } from 'react-icons/bs';





const Nav = () => {
  return <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
    <div className="container mx-auto">
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
        <Link to='home' className=' cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>



        <Link to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData />
        </Link>
        <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase />
        </Link>
        <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsGeoAlt />
        </Link>

        <Link to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsChatSquareText />
        </Link>

      </div>
    </div>;
  </nav>
};

export default Nav;