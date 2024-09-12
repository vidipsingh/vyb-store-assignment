"use client";

import React, { useState } from 'react'
import Navbar from '../home-page/Navbar'

const Profile = () => {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);

    

    const toggleActive1 = () => {
        setIsActive1(!isActive1);
      };

      const toggleActive2 = () => {
        setIsActive2(!isActive2);
      };

      const toggleActive3 = () => {
        setIsActive3(!isActive3);
      };

      const toggleActive4 = () => {
        setIsActive4(!isActive4);
      };

      const toggleActive5 = () => {
        setIsActive5(!isActive5);
      };

      


  return ( 
    <>
    <Navbar />
    <div className='flex'>
        
        <div className='p-10 mx-28 border rounded-md my-8 w-1/4 border-black text-center'>
            <img src="images/profile-img.png" className='w-44 h-44 ml-6' alt="" />
            <p className='text-green-900'>Change Profile Picture</p>

            <div className='flex flex-col mt-4'>
                <h1 className='text-3xl font-bold'>Samira Hadid</h1>
                <button onClick={toggleActive1} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${isActive1 ? 'bg-green-900 text-white' : ""} `}>Profile</button>
                <button onClick={toggleActive2} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${isActive2 ? 'bg-green-900 text-white' : ""} `}>My Store</button>
                <button onClick={toggleActive3} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${isActive3 ? 'bg-green-900 text-white' : ""} `}>Earnings</button>
                <button onClick={toggleActive4} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${isActive4 ? 'bg-green-900 text-white' : ""} `}>Address</button>
                <button onClick={toggleActive5} className={`px-8 py-4 border border-black my-1.5 rounded-xl bg-green-900 text-white ${isActive5 ? 'bg-green-900 text-white' : ""} `}>Logout</button>
            </div>

        </div>

        <div className={` ${isActive2 ? `p-4 my-8 border border-black rounded-md w-1/2` : "hidden" } `}>
            <div>
                <h1 className='text-2xl font-bold'>Creator Store</h1>
                <p className='mt-2'>Change Cover Picture</p>
            </div>

            <div>
                <h1 className='text-lg font-bold'>Link Social Media Accunt</h1>
                <div className='flex gap-3 my-2 items-center border border-green-900 p-1 px-2 w-80 rounded-lg '>
                    <img src="images/pngwing.com (15).png" className='w-4 h-4' alt="" />
                    <div className=" border border-green-900 px-2 rounded-lg ">Followers Count</div>
                    <div className=" border border-green-900 px-2 rounded-lg ">Instagram I'D</div>
                </div>

                <div className='flex gap-3 my-2 items-center border border-green-900 p-1 px-2 w-80 rounded-lg '>
                    <img src="images/pngwing.com (16).png" className='w-4 h-4' alt="" />
                    <div className=" border border-green-900 px-2 rounded-lg ">Followers Count</div>
                    <div className=" border border-green-900 px-2 rounded-lg ">Yotube I'D</div>
                </div>
            </div>

            <div>
                <h1 className='text-xl font-bold'>Clain Your Store URL</h1>
                <input type="text" placeholder='Username for store' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                <h1 className='text-xl font-bold mt-2'>Select Genre</h1>
                <input type="text" placeholder='Enter your Genre' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                <h1 className='text-xl font-bold'>Add Your Bank Details</h1>
                <input type="text" placeholder='xxxxxxxx' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                <h1 className='text-xl font-bold'>Add PAN card Number</h1>
                <input type="text" placeholder='xxxxxxxx' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                <h1 className='text-xl font-bold'>GST Invoicing</h1>
                <input type="text" placeholder='xxxxxxxx' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                <button className='w-1/3 bg-green-900 rounded-md px-6 py-2 text-white'>Save</button>
            </div>
        </div>


        <div className={` ${isActive1 ? `p-4 my-8 border border-black rounded-md w-1/2` : "hidden"  }`}>
            <h1 className='text-3xl font-bold'>Profile</h1>
            <div className='mt-4'>
                    <h1 className='text-xl font-bold'>User Name</h1>
                    <input type="text" placeholder='Entre username' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                    <h1 className='text-xl font-bold mt-2'>Email</h1>
                    <input type="text" placeholder='Enter email address' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                    <h1 className='text-xl font-bold'>Add Your Bank Details</h1>
                    <input type="text" placeholder='xxxxxxxx' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                    <h1 className='text-xl font-bold'>Password</h1>
                    <input type="password" placeholder='xxxxxxxx' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                    <h1 className='text-xl font-bold'>Phone Number</h1>
                    <input type="text" placeholder='Enter phone number' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                    <button className='w-1/3 bg-green-900 rounded-md px-6 py-2 text-white'>Save</button>
                </div>
        </div>

        <div className={` ${isActive4 ? `p-4 my-8 border border-black rounded-md w-1/2` : "hidden"  }`}>
            <h1 className='text-3xl font-bold'>Address</h1>
            <div className='mt-4'>
                    <h1 className='text-xl font-bold'>Address Line 1</h1>
                    <input type="text" placeholder='Entre Address' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                    <h1 className='text-xl font-bold mt-2'>Address Line 2</h1>
                    <input type="text" placeholder='Enter Address' className='border border-green-900 p-2 mt-2 mb-4 rounded-md w-full ' />

                    <div className='flex'>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold mx-2'>Zip Code</h1>
                            <input type="text" placeholder='Enter Zip Code' className='border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 ' />
                        </div>
                        
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold mx-2'>City</h1>
                            <input type="password" placeholder='Enter City' className='border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 ' />
                        </div>
                    </div>
                    
                    <div className='flex'>
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold mx-2'>Zip Code</h1>
                            <input type="text" placeholder='Enter Zip Code' className='border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 ' />
                        </div>
                        
                        <div className='w-1/2'>
                            <h1 className='text-xl font-bold mx-2'>City</h1>
                            <input type="password" placeholder='Enter City' className='border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 ' />
                        </div>
                    </div>

                    <button className='w-2/5 bg-green-900 rounded-md px-6 py-2 text-white'>Save</button>
                </div>
        </div>



    </div>

    </>
  )
}

export default Profile
