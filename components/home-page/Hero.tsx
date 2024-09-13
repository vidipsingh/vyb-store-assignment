"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
<input type="text" placeholder="Select influencer type?" />

const Hero = () => {

    const [followers, setFollowers] = useState(10000);
    const [products, setProducts] = useState(1);

    const calculateEarnings = (followers: number, products: number) => {
        // Adjust logic to scale dynamically
        if (followers === 10000 && products === 1) return 1000;
        if (followers === 20000 && products === 1) return 2000;
        if (followers === 10000 && products === 2) return 2000;
        if (followers === 20000 && products === 2) return 3000;

        // Dynamic scaling based on a linear interpolation approach
        const followerBase = 10000;
        const productBase = 1;

        // Calculate earnings dynamically
        return Math.floor((followers / followerBase) * (products / productBase) * 1000);
    };
  return (
    <>
    <div className="flex flex-col justify-center">
      <img src="images/hero.png" alt="" className="" />

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-20 items-center place-items-center ml-10 mr-10 md:ml-32 md:mr-32 shadow-2xl mb-20 p-10 rounded-lg text-lg font-bold">
        <div className="md:w-40 sm:w-20 w-20  md:border-r-2 border-slate-300">
            <img src="images/earth.png" alt=""  className="w-20 h-20 "/>
            <p className="w-16">Travel Itineary</p>
        </div>
        <div className="md:w-40 sm:w-20 w-20  md:border-r-2 border-slate-300">
            <img src="images/merch.png" alt="" className="w-16 h-16" />
            <p className="w-16">Custom Merchandise</p>
        </div>
        <div className="md:w-40 sm:w-20 w-20  md:border-r-2 border-slate-300">
            <img src="images/content.png" alt="" className="w-16 h-16" />
            <p className="w-16">Digital Content</p>
        </div>
        <div className="md:w-32 sm:w-20 w-20 ">
            <img src="images/fashion.png" alt="" className="w-16 h-16" />
            <p className="w-16">Fashion Brands</p>
        </div>
      </div>
    </div>

    <div className="w-screen h-1/2 bg-emerald-50">
        <div className="py-6 px-12 flex justify-between ">
            <h1 className="p-1 font-bold sm:text-lg text-sm md:text-2xl">Products</h1>
            <div className="flex gap-4">
                <button className="flex flex-row items-center border-black border-2 p-1 px-2 gap-4  rounded-lg text-lg">Itinenary <RiArrowDropDownLine className=" w-7 h-7" /></button>
                <button className="bg-green-900 text-white px-2 rounded-lg text-lg">Demo Store</button>
            </div>
        </div>

        <div className="flex justify-center px-10 py-8 items-center">
            <FaCircleArrowLeft  className="w-28 md:w-24 h-28 md:h-24 items-center"/>
            <div className="flex md:gap-28 mx-1 gap-10">
                <div className="w-2/3 md:px-14 ">
                    <h1 className="text-2xl font-bold">Delhi Itinerary</h1>
                    <p className="sm:text-sm md:flex hidden text-sm md:text-base ">
                    Delhi, India's capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.
                    </p>
                    <p className="sm:text-sm md:hidden flex text-sm md:text-base ">
                    Delhi, India's capital territory, is a massive metropolitan area in ...
                    </p>

                    <button className=" border-black border-2 p-0.5 md:p-2 px-1 md:px-4 rounded-xl text-base md:text-lg mt-10">Rs. 349</button>
                    <button className="bg-green-900 text-white ml-0 md:ml-4 p-0.5 md:p-2 px-3 md:px-6 rounded-lg text-base md:text-lg mt-5 md:mt-10">More</button>
                </div>
                <div>
                    <img src="images/monument.png" alt="" className="md:w-80 md:h-80 sm:w-40 sm:h-40 " />
                </div>
            </div>
            <FaArrowCircleRight className="w-28 md:w-24 h-28 md:h-24 items-center" />
        </div>
        </div>

        <div className="md:flex sm:flex-none flex-none justify-center gap-8 mt-10">
            <div className=" bg-green-950 text-white w-96 p-4 h-52 rounded-md mt-28 sm:ml-24 ml-5 md:ml-0 ">
                <h1 className="font-bold text-xl">Start Vybing with us!</h1>
                <p className="mt-2"> We help influencers make money by monetizing their travel plans, merchandise, and digital goods and many more. </p>

                <button className="mt-4 bg-green-600 rounded-md p-2 px-3 text-black">Join Us</button>
            </div>

            <div className="h-[2300px] sm:hidden hidden md:flex border border-black">
            </div>

            <div className="flex flex-col gap-10 mb-20">
            <div className="md:w-[500px] md:h-[650px] sm:w-[250px] sm:h-[500px] mt-10 ml-5 mr-5 md:mr-0 sm:ml-40 bg-emerald-50 rounded-md p-4">
                <h1 className="font-bold text-xl">Sign Up and create your own store hassle-free.</h1>
                <p className="mt-2">Join us via google signin and verify your influencer status by entering you social media Id and unlock your store <span className="font-bold">@ zero cost.</span> </p>

                <img src="images/Mobile login 2.png" alt="" className="mt-6 md:w-56 sm:w-28 sm:h-56 md:h-[450px] text-center sm:ml-16 md:ml-32" />
            </div>

            <div className="md:w-[500px] md:h-[650px] sm:w-[250px] sm:h-[500px] mt-10 ml-5 mr-5 md:mr-0 sm:ml-40 bg-emerald-50 rounded-md p-4">
                <h1 className="font-bold text-xl">Build & customize your store front.</h1>
                <p className="mt-2">Simply fill in the details to build your digital store. Once done, start selling your products to your audience.</p>

                <img src="images/creator store mobile 1.png" alt="" className="mt-6 md:w-56 sm:w-28 sm:h-56 md:h-[450px]  text-center sm:ml-16 md:ml-32" />
            </div>


            <div className="md:w-[500px] md:h-[650px] sm:w-[250px] sm:h-[500px] mt-10 ml-5 mr-5 md:mr-0 sm:ml-40 bg-emerald-50 rounded-md p-4">
                <h1 className="font-bold text-xl">Call audience to your store. Easily integrate links into content. </h1>
                <p className="mt-2">After setting up your products, its time to go public. Put your store link in insta bio and lets make first post together !</p>

                <img src="images/iPhone 14 & 15 Pro - 150 1.png" alt="" className="mt-6 md:w-56 sm:w-28 sm:h-56 md:h-[450px] text-center sm:ml-16 md:ml-32" />
            </div>

            <div className="md:w-[500px] md:h-[650px] sm:w-[250px] sm:h-[500px] mt-10 ml-5 mr-5 md:mr-0 sm:ml-40 bg-emerald-50 rounded-md p-4">
                <h1 className="font-bold text-xl"> Monetize your influencer status: Earn money adding real value to your true followers! </h1>
                <p className="mt-2">Let VYB the money now !! Its here and widthdraw it periodically.</p>

                <img src="images/earning mobile 1.png" alt="" className="mt-6 md:w-56 sm:w-28 sm:h-56 md:h-[450px]  text-center sm:ml-16 md:ml-32" />
            </div>
            </div>

        </div>


        <div className="w-screen h-[650px] md:h-[470px] bg-emerald-50">
            <h1 className="text-3xl font-semibold text-center pt-4">ESTIMATE EARNING POTENTIAL</h1>

            <div className="md:ml-60 lg:ml-72 sm:ml-20 px-2 py-8">
                <p className="text-lg">What kind of influencer are you?</p>

                <div className="flex bg-white w-[400px] mt-2">
                    <input type="text" placeholder="Select influencer type?" className="w-[400px] p-2 px-2 rounded-md" />
                    {/* <RiArrowDropDownLine className="ml-2 w-4 h-4 align-middle" /> */}
                </div>
                
                <div className="md:flex gap-8">


                <div className="p-2 max-w-lg rounded-lg w-[400px] h-[200px] mt-4 ">

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                How many followers do you have?
                </label>
                <input
                    type="range"
                    min="10000"
                    max="100000"
                    step="10000"
                    value={followers}
                    onChange={(e) => setFollowers(Number(e.target.value))}
                    className="w-full"
                />
                <p className="text-center bg-white shadow-sm rounded-full mx-40">{followers}</p>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    How many products do you list monthly?
                </label>
                <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={products}
                    onChange={(e) => setProducts(Number(e.target.value))}
                    className="w-full"
                />
                <p className="text-center bg-white shadow-sm rounded-full mx-44">{products}</p>
            </div>

            
                </div>

                <div>
                    <div className="text-center mt-4">
                        <h2 className="text-xl font-semibold">Monthly Earnings</h2>
                        <p className="text-2xl font-bold">₹{calculateEarnings(followers, products)}</p>
                    </div>
                    
                    <div className="text-center mt-4">
                        <h2 className="text-xl font-semibold">Yearly Earnings</h2>
                        <p className="text-2xl font-bold">₹{12*calculateEarnings(followers, products)}</p>
                    </div>
                </div>
                

            </div>

            </div> 

            <button className="md:ml-[600px] sm:ml-[300px] ml-[170px]  bg-green-900 p-2 px-4 text-white rounded-lg">Calculate</button>
        </div>

        
    </>
  )
}

export default Hero
