"use client";

import React, { useState } from "react"
import { FaPlus } from "react-icons/fa6";

const Faq = () => {

    // const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);




    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
      };

      const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
      };

      const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
      };

      const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
      };

      const toggleDropdown5 = () => {
        setIsOpen5(!isOpen5);
      };

      const toggleDropdown6 = () => {
        setIsOpen6(!isOpen6);
      };


  return (
    <div>
        <div className="w-screen h-[550px] text-center">
            <h1 className="mt-20 text-2xl font-semibold text-green-900">FREQUENTLY ASKED QUESTIONS</h1>
            <p>Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for? </p>
            <p className="text-green-900">Check out our full documentation</p>

            <div className="mt-8 font-semibold">

            <div className=" bg-emerald-50 shadow-sm ml-5 mr-5 sm:ml-36 sm:mr-36  md:mr-64 md:ml-64 mb-2 p-2 px-4 rounded-md text-left items-center justify-between ">
                <div className=" flex justify-between items-center "><p>How much does it cost to set up a store?</p> <FaPlus className="cursor-pointer" onClick={toggleDropdown1} /></div>

                {isOpen1 && (
                    <p className="mt-2">No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!</p>
                )}
            </div>
            <div className=" bg-emerald-50 shadow-sm ml-5 mr-5 md:mr-64 sm:ml-36 sm:mr-36 md:ml-64 mb-2 p-2 px-4 rounded-md text-left items-center justify-between ">
                <div className="flex justify-between items-center"><p>How much does it cost to set up a store?</p> <FaPlus className="cursor-pointer" onClick={toggleDropdown2} /></div>

                {isOpen2 && (
                    <p className="mt-2">No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!</p>
                )}
            </div>
            <div className=" bg-emerald-50 shadow-sm ml-5 mr-5 md:mr-64 sm:ml-36 sm:mr-36 md:ml-64 mb-2 p-2 px-4 rounded-md text-left items-center justify-between ">
                <div className=" flex justify-between items-center "><p>How much does it cost to set up a store?</p> <FaPlus className="cursor-pointer" onClick={toggleDropdown3} /></div>

                {isOpen3 && (
                    <p className="mt-2">
                    No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!
                    </p>
                )}
            </div>
            <div className=" bg-emerald-50 shadow-sm md:mr-64 ml-5 mr-5 sm:ml-36 sm:mr-36 md:ml-64 mb-2 p-2 px-4 rounded-md text-left items-center justify-between ">
                <div className=" flex justify-between items-center "><p>How much does it cost to set up a store?</p> <FaPlus className="cursor-pointer" onClick={toggleDropdown4} /></div>

                {isOpen4 && (
                    <p className="mt-2">
                    No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!
                    </p>
                )}
            </div>
            <div className=" bg-emerald-50 shadow-sm md:mr-64 ml-5 mr-5 sm:ml-36 sm:mr-36 md:ml-64 md:mb-2 p-2 px-4 rounded-md text-left items-center justify-between ">
                <div className=" flex justify-between items-center "><p>How much does it cost to set up a store?</p> <FaPlus className="cursor-pointer" onClick={toggleDropdown5} /></div>

                {isOpen5 && (
                    <p className="mt-2">
                    No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!
                    </p>
                )}
            </div>
            <div className=" bg-emerald-50 shadow-sm md:mr-64 ml-5 mr-5 mt-2 sm:ml-36 sm:mr-36 md:ml-64 mb-2 p-2 px-4 rounded-md text-left items-center justify-between ">
                <div className=" flex justify-between items-center "><p>How much does it cost to set up a store?</p> <FaPlus className="cursor-pointer" onClick={toggleDropdown6} /></div>

                {isOpen6 && (
                    <p className="mt-2">
                    No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!
                    </p>
                )}
            </div>
            
            
            </div>
        </div>
    </div>
  )
}

export default Faq
