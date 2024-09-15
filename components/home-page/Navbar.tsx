"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
// import { CiHeadphones } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";


const Navbar = () => {

  const [isActive1, setIsActive1] = useState(false);

  const toggleActive1 = () => {
    setIsActive1(!isActive1);
  };


// const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
    <div className="flex justify-between bg-gray-300/30 backdrop-blur-md p-2 mr-16 ml-16 mt-2 rounded-3xl  ">
       <Link  href="/"> <img src="/images/image.png" alt="" className="md:w-20 w-15 h-10 md:h-10 items-center mt-0.5 cursor-pointer" /> </Link>

      <div className="flex mb-2 mt-2 bg-white rounded-full p-1 ">
        <IoIosSearch className="w-6 h-6 "/>   
        <input type="text" placeholder="Search" className="rounded-full w-28 md:w-48 sm:w-36" />
      </div>

      {/* <div className="md:hidden flex items-center p-2">
        <button onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="w-8 h-8" />
        </button>
      </div> */}

      <div className={`md:flex items-center gap-10 sm:gap-6  text-lg sm:hidden hidden `}>
        <div className="flex items-center gap-2 cursor-pointer">
            <CiShoppingCart />
            <p>Cart</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
            <CiCircleInfo />
            <p>About</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
            <p>Contact</p>
        </div>


        <div className="flex items-center gap-2 cursor-pointer">
           <Link href="/sign-in"><p>Sign In</p></Link> 
        </div>


        <div className="flex items-center gap-2 cursor-pointer">
           <Link href="/sign-up"><p>Sign Up</p></Link> 
        </div>

      </div>

      <div className="flex items-center text-lg cursor-pointer">
       <Link href="/profile"> <CgProfile /> </Link>
        <RiArrowDropDownLine onClick={toggleActive1} />
      </div>

    </div>

    <div className={ ` ${isActive1 ? `z-50 absolute md:hidden -mt-3 rounded-md ml-72 p-4 mr-8 bg-gray-200 ` : "hidden" } ` }>
      <Link href="/sign-in"><h1 className="font-semibold">Sign In</h1> </Link>
      <Link href="/sign-up"><h1 className="font-semibold">Sign Up</h1> </Link>
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