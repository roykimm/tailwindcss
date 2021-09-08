import React, { useState } from 'react'
import data from '../data/section2';

function Section2() {

    const [cards, setCards] = useState(data)

    return (
        <section className="container md:grid md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => {
                const { id, image, title, desc, link } = card

                return (
                    <article key={id} className="p-8">
                        <div className="">
                            <img className="hover:bg-opacity-70" src={process.env.PUBLIC_URL + image} alt="" />
                            <h2 className="font-semibold mt-2 mb-1 text-xl">{title}</h2>
                            <p>{desc}</p>
                            <button className="cursor-pointer text-red-600 font-semibold">{link}</button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Section2
