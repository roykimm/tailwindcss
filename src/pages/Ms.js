import React from 'react'
import ChooseYourMs from '../mscomponents/ChooseYourMs'
import Footer from '../mscomponents/Footer'
import GamePass from '../mscomponents/GamePass'
import Header from '../mscomponents/Header'
import Hero from '../mscomponents/Hero'
import MSResponse from '../mscomponents/MSResponse'
import Section2 from '../mscomponents/Section2'
import Section3 from '../mscomponents/Section3'
import Social from '../mscomponents/Social'
import ThisHoliday from '../mscomponents/ThisHoliday'

function Ms() {
    return (
        <div>
           <Header />
           <Hero />
           <ChooseYourMs />
           <Section2 />
           <GamePass />
           <Section3 />
           <MSResponse />
           <ThisHoliday />
           <Social />
           <Footer />
        </div>
    )
}

export default Ms
