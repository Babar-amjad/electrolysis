import React, { useState } from "react";
import { BsBorderWidth } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  return (
    <>
      <div className="bg-orange-500 text-black justify-between p-1 md:flex w-full sticky top-0 ">
        <div className="flex mx-10">
          <img
            className="h-16 w-30  rounded-full md:items-start"
            src="https://electrolysis.com.pk/images/logoelect3.png"
            alt="..."
          />
          <div
            onClick={toggleMenu}
            className="md:hidden h-6 mt-8 w-6 absolute right-10 cursor-pointer"
          >
            {isOpen ? <RxCross2 /> : <BsBorderWidth />}
          </div>
        </div>

        <div className="mx-auto">
          <ul className={`md:flex flex-row gap-10 ${isOpen ? '' : 'hidden'}`}>
            <li className="my-4 text-xl"><Link to="/">Home</Link></li>
            <li className="my-4 text-xl"><Link to="electrolysis">Electrolysis</Link></li>
            <li className="my-4 text-xl"><Link to="gallery">Gallery</Link></li>
            <li className="my-4 text-xl"><Link to="services">Services</Link></li>
            <li className="my-4 text-xl"><Link to="about">About</Link></li>
            <li className="my-4 text-xl"><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
