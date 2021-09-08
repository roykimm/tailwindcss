import React from 'react'
import learnnextjsImg from '../images/learnnextjs.png';

const Learn = () => {
    return (
        <div className="py-10">
           <h2 className="text-center font-bold text-3xl">Learn Next.js</h2>
           <p className="text-center text-md text-gray-500 pt-5">Learn Next.js step-by-step and earn points ✨.</p>
           <div className="mt-10 cursor-pointer hover:opacity-50 shadow-xl">
               <img src={learnnextjsImg} alt=".." />
           </div>
           <div className="text-center mt-10">
                <button className="w-50 h-12 mt-2 text-md text-white bg-blue-500 px-8 rounded-lg ml-8 shadow-lg hover:bg-blue-300">Get Started</button>
            </div>
        </div>
    )
}

export default Learn
