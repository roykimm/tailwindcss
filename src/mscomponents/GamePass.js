import React from 'react'
import ShowImg from '../images/sunrise.jpg';

function GamePass() {
    return (
        <section className="hero gamepass-hero">
            <div>
                <img className="hero-img" src={ShowImg} alt="xbox gamepass" />
            </div>

            <div className="overlay bg-gray-800 px-10 py-20 text-center text-white">
                <h2 className="font-semibold text-xl mb-2">Xbox Game Pass Ultimate</h2>
                <p className="mb-5">
                    get your first 3 months of Xbox Game Pass Ultimate membership for $1.
                    Now included EA Play. New subscribers only.
                </p>
                <button className="mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-80">Join Now</button>
                <button>Comare all Plans</button>
            </div>
        </section>
    )
}

export default GamePass
