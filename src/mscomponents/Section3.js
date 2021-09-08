import React, { useState } from 'react'
import data from '../data/section3';

function Section3() {

    const [cards, setCards] = useState(data)

    return (
        <div>
            <h2 className="font-semibold px-8 text-2xl mt-5">For Business</h2>
            <section className="md:grid md:grid-cols-2">
                
                {cards.map((card) => {
                    const { id, image, title, desc, link } = card

                    return (
                        <article key={id} className="p-8">
                            <div>
                                <img src={process.env.PUBLIC_URL + image} alt="" />
                                <h2 className="font-semibold mt-2 mb-1 text-xl">{title}</h2>
                                <p>{desc}</p>
                                <button className="cursor-pointer text-red-600 font-semibold">{link}</button>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Section3
