"use client";

import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full'>
    <div className='flex justify-between bg-gray-300 p-2 mr-16 ml-16 mt-2 rounded-3xl '>
      <img src="/images/image.png" alt="" className='w-20 h-10 items-center mt-0.5 cursor-pointer' />

      <div className='flex mb-2 mt-2 bg-white rounded-full p-1 '>
        <IoIosSearch className='w-6 h-6 '/>   
        <input type="text" placeholder='Search' className='rounded-full w-48 sm:w-36' />
      </div>

      {/* <div className='md:hidden flex items-center p-2'>
        <button onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className='w-8 h-8' />
        </button>
      </div> */}

      <div className={`flex items-center gap-10 sm:gap-6  text-lg`}>
        <div className='flex items-center gap-2 cursor-pointer'>
            <CiShoppingCart />
            <p>Cart</p>
        </div>

        <div className='flex items-center gap-2 cursor-pointer'>
            <CiCircleInfo />
            <p>About</p>
        </div>

        <div className='flex items-center gap-2 cursor-pointer'>
            <CiHeadphones />
            <p>Contact</p>
        </div>
      </div>

      <div className='flex items-center text-lg cursor-pointer'>
        <CgProfile />
        <RiArrowDropDownLine />
      </div>

    </div>
    </div>
  )
}

interface Navbar {
    label: string;
    placeholder: string;
    type?: string;
    src: string
}


export default Navbar