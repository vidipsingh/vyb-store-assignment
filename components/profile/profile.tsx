"use client";

import React, { useState } from "react"
import Navbar from "../home-page/Navbar"

const Profile = () => {

    const [activeSection, setActiveSection] = useState<number | null>(null); // Initialize with null, no section active

    const toggleActiveSection = (section: number) => {
        if (activeSection === section) {
            setActiveSection(null); // Close the section if it’s already active
        } else {
            setActiveSection(section); // Set the clicked section as active
        }
    };


    // const [isActive1, setIsActive1] = useState(false);
    // const [isActive2, setIsActive2] = useState(false);
    // const [isActive3, setIsActive3] = useState(false);
    // const [isActive4, setIsActive4] = useState(false);
    // const [isActive5, setIsActive5] = useState(false);


      


  return ( 
    <>
    <Navbar />
        <div className="md:flex flex-none">

        <div className="p-10 md:mx-28 mr-16 ml-20 border rounded-md my-8 md:w-1/4 w-[290px] border-black text-center">
            <img src="images/profile-img.png" className="w-44 h-44 ml-2 md:ml-6" alt="" />
            <p className="text-green-900">Change Profile Picture</p>

            <div className="flex flex-col mt-4">
                <h1 className="text-3xl font-bold">Samira Hadid</h1>
                <button onClick={() => toggleActiveSection(1)} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${activeSection === 1 ? "bg-green-900 text-white" : ""}`}>
                    Profile
                </button>
                <button onClick={() => toggleActiveSection(2)} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${activeSection === 2 ? "bg-green-900 text-white" : ""}`}>
                    My Store
                </button>
                <button onClick={() => toggleActiveSection(3)} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${activeSection === 3 ? "bg-green-900 text-white" : ""}`}>
                    Earnings
                </button>
                <button onClick={() => toggleActiveSection(4)} className={`px-8 py-4 border border-black my-1.5 rounded-xl ${activeSection === 4 ? "bg-green-900 text-white" : ""}`}>
                    Address
                </button>
                <button onClick={() => toggleActiveSection(5)} className={`px-8 py-4 border border-black my-1.5 rounded-xl bg-green-900 text-white ${activeSection === 5 ? "bg-green-900 text-white" : ""}`}>
                    Logout
                </button>
            </div>
        </div>

        {/* My Store Section */}
        <div className={`${activeSection === 2 ? "p-4 my-8 ml-12 md:ml-0 border border-black rounded-md w-[350px] md:w-1/2" : "hidden"}`}>
            <div>
                        <h1 className="text-2xl font-bold">Creator Store</h1>
                        <p className="mt-2">Change Cover Picture</p>
                    </div>

                    <div>
                        <h1 className="text-lg font-bold">Link Social Media Accunt</h1>
                        <div className="flex gap-3 my-2 items-center border border-green-900 p-1 px-2 w-80 rounded-lg ">
                            <img src="images/pngwing.com (15).png" className="w-4 h-4" alt="" />
                            <div className=" border border-green-900 px-2 rounded-lg ">Followers Count</div>
                            <div className=" border border-green-900 px-2 rounded-lg ">Instagram I&apos;D</div>
                        </div>

                        <div className="flex gap-3 my-2 items-center border border-green-900 p-1 px-2 w-80 rounded-lg ">
                            <img src="images/pngwing.com (16).png" className="w-4 h-4" alt="" />
                            <div className=" border border-green-900 px-2 rounded-lg ">Followers Count</div>
                            <div className=" border border-green-900 px-2 rounded-lg ">Yotube I&apos;D</div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Clain Your Store URL</h1>
                        <input type="text" placeholder="Username for store" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                        <h1 className="text-xl font-bold mt-2">Select Genre</h1>
                        <input type="text" placeholder="Enter your Genre" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                        <h1 className="text-xl font-bold">Add Your Bank Details</h1>
                        <input type="text" placeholder="xxxxxxxx" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                        <h1 className="text-xl font-bold">Add PAN card Number</h1>
                        <input type="text" placeholder="xxxxxxxx" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                        <h1 className="text-xl font-bold">GST Invoicing</h1>
                        <input type="text" placeholder="xxxxxxxx" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                        <button className="w-1/3 bg-green-900 rounded-md px-6 py-2 text-white">Save</button>
                    </div>
        </div>

        {/* Profile Section */}
        <div className={`${activeSection === 1 ? "p-4 my-8 ml-20 md:ml-0 border border-black rounded-md w-2/3 md:w-1/2" : "hidden"}`}>
        <h1 className="text-3xl font-bold">Profile</h1>
                    <div className="mt-4">
                            <h1 className="text-xl font-bold">User Name</h1>
                            <input type="text" placeholder="Entre username" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                            <h1 className="text-xl font-bold mt-2">Email</h1>
                            <input type="text" placeholder="Enter email address" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                            <h1 className="text-xl font-bold">Add Your Bank Details</h1>
                            <input type="text" placeholder="xxxxxxxx" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                            <h1 className="text-xl font-bold">Password</h1>
                            <input type="password" placeholder="xxxxxxxx" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                            <h1 className="text-xl font-bold">Phone Number</h1>
                            <input type="text" placeholder="Enter phone number" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                            <button className="w-1/3 bg-green-900 rounded-md px-6 py-2 text-white">Save</button>
                        </div>
        </div>

        {/* Address Section */}
        <div className={`${activeSection === 4 ? "p-4 my-8 ml-20 md:ml-0 border border-black rounded-md w-2/3 md:w-1/2" : "hidden"}`}>
        <h1 className="text-3xl font-bold">Address</h1>
                    <div className="mt-4">
                            <h1 className="text-xl font-bold">Address Line 1</h1>
                            <input type="text" placeholder="Entre Address" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                            <h1 className="text-xl font-bold mt-2">Address Line 2</h1>
                            <input type="text" placeholder="Enter Address" className="border border-green-900 p-2 mt-2 mb-4 rounded-md w-full " />

                            <div className="flex">
                                <div className="w-1/2">
                                    <h1 className="text-xl font-bold mx-2">Zip Code</h1>
                                    <input type="text" placeholder="Enter Zip Code" className="border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 " />
                                </div>
                                
                                <div className="w-1/2">
                                    <h1 className="text-xl font-bold mx-2">City</h1>
                                    <input type="password" placeholder="Enter City" className="border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 " />
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="w-1/2">
                                    <h1 className="text-xl font-bold mx-2">Zip Code</h1>
                                    <input type="text" placeholder="Enter Zip Code" className="border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 " />
                                </div>
                                
                                <div className="w-1/2">
                                    <h1 className="text-xl font-bold mx-2">City</h1>
                                    <input type="password" placeholder="Enter City" className="border border-green-900 p-2 mt-2 mb-4 mx-2 rounded-md w-4/5 " />
                                </div>
                            </div>

                            <button className="w-2/5 bg-green-900 rounded-md px-6 py-2 text-white">Save</button>
                        </div>
        </div>
        </div>

    </>
  )
}

export default Profile
