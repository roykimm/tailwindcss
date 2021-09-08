import React from 'react'
import Top from '../nextcomponents/Top'
import Header from '../nextcomponents/Header'
import Front from '../nextcomponents/Front'
import WhyNext from '../nextcomponents/WhyNext'
import WhoNext from '../nextcomponents/WhoNext'
import Showcase from '../nextcomponents/Showcase'
import Learn from '../nextcomponents/Learn'
import Send from '../nextcomponents/Send'
import Footer from '../nextcomponents/Footer'


const Next = () => {
    return (
        <div className="bg-white">
            <Top />
            <div className="container">
                <Header />
                <Front />
                <WhyNext />
                <WhoNext />
                <Showcase />
                <Learn />
                <Send />
            </div>
            <Footer />
        </div>
    )
}

export default Next
