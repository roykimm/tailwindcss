import React from 'react'
import showCaseImg1 from '../images/showcase1.jpg'
import showCaseImg2 from '../images/showcase2.jpg'
import showCaseImg3 from '../images/showcase3.jpg'
import showCaseImg4 from '../images/showcase4.jpg'
import showCaseImg5 from '../images/showcase5.jpg'
import showCaseImg6 from '../images/showcase6.jpg'

const Showcase = () => {
    return (
        <div >
            <div className="text-center grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                <img className="py-2 px-2 object-contain cursor-pointer hover:opacity-50" src={showCaseImg1} alt="..." />
                <img className="py-2 px-2 object-contain cursor-pointer hover:opacity-50" src={showCaseImg2} alt="..." />
                <img className="py-2 px-2 object-contain cursor-pointer hover:opacity-50" src={showCaseImg3} alt="..." />
                <img className="py-2 px-2 object-contain cursor-pointer hover:opacity-50" src={showCaseImg4} alt="..." />
                <img className="py-2 px-2 object-contain cursor-pointer hover:opacity-50" src={showCaseImg5} alt="..." />
                <img className="py-2 px-2 object-contain cursor-pointer hover:opacity-50" src={showCaseImg6} alt="..." />
            </div>
            <div className="text-center mt-5 mb-10">
                <button className="w-60 h-12 mt-2 text-md text-white bg-blue-500 px-8 rounded-lg ml-8 shadow-lg hover:bg-blue-300">View Showcase</button>
            </div>
        </div>
    )
}

export default Showcase
