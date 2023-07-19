import React from 'react';
import Home from '../../public/assets/icons/home.svg';
import Calender from '../../public/assets/icons/calender.svg';
import Gallery from '../../public/assets/icons/gallery.svg';
import Chat from '../../public/assets/icons/chat.svg';

const Footer = () => {
  return (
    <div className=" fixed lg:hidden bottom-0 mb-1 mx-1 right-0 left-0 z-20">
      <div className="bg-dark-500 w-full px-6 rounded-full shadow border-opacity-20 border border-white">
        <ul className=" flex items-center justify-evenly text-white text-xs font-light py-2 md:py-3">
          <li className="flex items-center font-medium  flex-col px-2 py-1">
            <Home className="h-6 w-6 mb-1" />
            <a href="#home">
            <p>Home</p>
            </a>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Calender className="h-6 w-6 mb-1" />
            <a href="#reception">
            <p>Reception</p></a>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Gallery className="h-6 w-6 mb-1" />
            <a href="#gallery">
            <p>Gallery</p>
            </a>
          </li>
          </ul>
      </div>
    </div>
  );
};

export default Footer;
