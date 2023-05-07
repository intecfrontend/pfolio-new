import React from 'react';
import { FaLinkedin, FaGithub, FaDribble, FaPhone } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../variants';
import image from "../assets/beneface.jpg";

const Banner = () => {
  return <section className='section min-h-[45vh] lg:min-h-[38vh]' id='home'>
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="order-2 lg:order-1 lg:w-2/3 lg:mb-0 mb-6">
        <div className="blinkertxt lg:ml-5 ml-3">
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}><a className="titleName" target='blank' href="https://www.linkedin.com/in/benedikt-lantsoght-02481319/">Benedikt <span>&nbsp;Lantsoght&nbsp;</span>

            <FaLinkedin /> </a></motion.h1>
        </div>
        <motion.div variants={fadeIn('up', 1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mb-6 text-[36px] lg:text-[60px]  noBlink">
          <span>&nbsp;</span>
          <TypeAnimation
            className="blinker font-semibold text-color"
            sequence={['React Developer ', 2000, 'UX/UI Designer ', 1000, 'Multi(5)-Lingual ', 1000, 'T. 0499 388 227 ', 1000]}
            speed={50}
            wrap='span'
            repeat={Infinity}
            blink={false}
          />

        </motion.div>

      </div>
      <div className="fotomeparent order-1 lg:order-2 lg:w-1/3">
        <div className="fotome max-w-xs rounded-full overflow-hidden mx-auto lg:ml-0 ml-3 m-10">
          <img className="w-full h-auto mx-auto" src={image} alt="beneface" />
        </div>
      </div>
    </div>
  </section>





};

export default Banner;
