import React from "react"
// import {useState} from "react";
import { FaGoogle } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import Navbar from "../home-page/Navbar";
// import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
    <Navbar />
        <div className="flex justify-center p-10">
            <div>
                <img src="images/signup.png" alt="" className="w-96 h-[450px] sm:hidden md:flex hidden " />
            </div>



        <div className="w-3/4 pl-10 sm:pl-0 sm:w-3/4 lg:w-1/2 mt-2 h-5/6 border lg:border-none border-black">
            <h1 className="w-40 lg:ml-56 md:ml-14 font-semibold  text-2xl mt-8">
                Log In Page
            </h1>
            <div className="flex flex-col lg:justify-center lg:items-center md:pl-12 xl:pl-1 gap-8 mt-4">
                
                <button className="flex items-center gap-2 text-sm md:text-xl border border-black xl:pl-12 xl:pr-36 xl:ml-1  lg:ml-10 md:pl-2 mr-8 md:pr-2 pl-2 pr-8 pt-1 pb-1 rounded-md" >
                <FaGoogle /> Login with Google
                </button>
                
            </div>
            <div className="">
                <h1 className="flex items-center justify-center  mt-6"><FiMinus className="text-4xl"/>OR<FiMinus className="text-4xl"/></h1>
            </div>


            <form  >
            <div className="flex flex-col md:ml-14 lg:ml-28 mt-4">
            <h1 className="text-xl ">Email</h1>
            </div>
            <input
                    type="email"
                    className="border border-black w-2/3 h-8 rounded-md md:ml-14 lg:ml-28 pl-2"
                    placeholder="Enter email address"
                />
            <div className="flex flex-col md:ml-14 lg:ml-28 mt-4">
            <h1 className="">Password</h1>
            
            </div>
            <input
                    type="password"
                    className="border border-black w-2/3 h-8 rounded-md md:ml-14 lg:ml-28 pl-2"
                    placeholder="Enter Password"
                />
            <div className="md:ml-14 lg:ml-28 lg:mr-20 mt-4 items-center text-center "> 
            <button className="border border-green-900 pl-10 pr-10 py-1 rounded-full">Login</button>
            <div className="">
                <h1 className="flex items-center justify-center  "><FiMinus className="text-4xl"/>Don&apos;t have an account?<FiMinus className="text-4xl"/></h1>
                <button className="bg-green-900 text-white px-8 py-1 rounded-full">Sign Up</button>
            </div>
            </div>
            </form>

            </div>
        </div>
    </div>
  )
}

export default Page2;
