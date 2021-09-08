import React from 'react'
import showcase from '../images/programming.png';
import { FaChevronRight } from 'react-icons/fa'

function Hero() {
    return (
        <section className="hero">
            <div>
                <img className="hero-img" src={showcase} alt="..." />
            </div>
            <div className="overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left">
                <p className="bg-white inline-block py-1 px-5 text-red-700 font-bold mb-3">
                    Countdown Sale
                </p>
                <h1 className="font-bold text-xl mb-2">bundle and asve up to $430</h1>
                <p className="text">
                    Complete your surface Pro 7 with choice of select Type cover and free sleeve
                </p>
                <button className="bg-red-600 text-white py-3 px-4 mt-3 hover:bg-red-800 sm:inline-block" >
                    <p>Shop Now
                    <FaChevronRight className="inline" />
                    </p>
                </button>
            </div>
        </section>
    )
}

export default Hero
