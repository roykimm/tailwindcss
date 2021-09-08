import React from 'react'
import HolidayImg from '../images/woman.jpg'


function ThisHoliday() {
    return (
        <section>
            <div>
                <img src={HolidayImg} alt="holiday pass" />
            </div>

            <div className="bg-gray-800 text-center text-white px-10 py-20">
                <h2 className="font-semibold text-xl mb-2">This holiday, find your joy</h2>
                <p className="mb-5">
                    Follow the story of Rufus, a pup whose dream takes him into Microsoft worlds like Mincraft, flight Simulator, Team
                </p>
                <button className="mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-80">Watch now</button>
            </div>
        </section>    
    )
}

export default ThisHoliday
