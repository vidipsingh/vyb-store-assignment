import Link from "next/link";
import Navbar from "../home-page/Navbar";

export function Page1() {
    return (
    <>
    <Navbar />
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center gap-48">
                <div className="sm:hidden md:flex hidden">
                    <img src="images/signup.png" alt="" className="w-96 h-[500px] sm:hidden md:flex hidden " />
                </div>

                <div className="md:w-1/4">
                    <div className="px-10">
                        <div className="text-3xl text-center font-extrabold">
                            Sign Up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="Enter full name"/>
                        <LabelledInput label="Email" placeholder="Enter email"  />
                        <LabelledInput label="Password" type={"password"} placeholder="Enter password" />
                        
                    </div>

                    <div className="mt-4 items-center text-center">
                        <h1 className="text-center">Are You A Creator?</h1>
                        <button className="p-2  mt-2 px-6 mr-4 border border-black rounded-md">Yes</button>
                        <button className="p-2  mt-2 px-6 mr-4 border border-black rounded-md">No</button>
                        
                    </div>
                    <div className="text-center items-center my-4">
                        <button className="px-10 py-1 border border-green-800 text-green-800 rounded-full">Sign Up</button>
                        <p className="my-1">Already have an account? <Link href="/sign-in" className="text-green-700 font-semibold" >Login</Link></p>
                    </div>

                </div>
        </div>
    </div>
    </>

)}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}