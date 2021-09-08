import React, { useState } from 'react'
import data from '../data/msdata';
const ChooseYourMs = () => {

    const [cards , setCards] = useState(data);

    return (
        <section className="md:grid md:grid-cols-2 xl:grid-cols-6 my-8">
            {cards.map((card) => {
                    const { id, image, text  } = card;
                    console.log(image)
                    return (
                        <article key={id} className="flex items-center px-6 py-2 justify-center">
                            <img className="w-12" src={process.env.PUBLIC_URL + image} alt="card..." />
                            <p className="mx-3 font-semibold cursor-pointer hover:underline ">{text}</p>
                        </article>
                    )
                })}
        </section>
    )
}

export default ChooseYourMs
