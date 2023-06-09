import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Loca from './components/Location';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='App bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Loca />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
