import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  return (
    <div>
        <div className='w-screen h-[550px] text-center'>
            <h1 className='mt-20 text-2xl font-semibold'>FREQUENTLY ASKED QUESTIONS</h1>
            <p>Quick answers to questions you may have. Can’t find what you're looking for? </p>
            <p>Check out our full documentation</p>

            <div className='mt-8 font-semibold'>

            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>How much does it cost to set up a store?</p> <FaPlus className='cursor-pointer' />
            </div>
            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>What kind of digital products can I sell?</p> <FaPlus className='cursor-pointer' />
            </div>
            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>What kind of digital products can I sell?</p> <FaPlus className='cursor-pointer' />
            </div>
            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>Is there a limit to the number of products I can list?</p> <FaPlus className='cursor-pointer' />
            </div>
            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>How do I receive payments for my sales?</p> <FaPlus className='cursor-pointer' />
            </div>
            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>Can I sell internationally on this marketplace?</p> <FaPlus className='cursor-pointer' />
            </div>
            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>What support and resources are available for sellers?</p> <FaPlus className='cursor-pointer' />
            </div>
            <div className='bg-emerald-50 shadow-sm mr-64 ml-64 mb-2 p-2 px-4 rounded-md text-left flex items-center justify-between'>
                <p>Is there a review process for uploaded products?</p> <FaPlus className='cursor-pointer' />
            </div>

            </div>
        </div>
    </div>
  )
}

export default Faq
