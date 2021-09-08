import React from 'react'
import Apparel from '../nikecomponents/Apparel'
import Footer from '../nikecomponents/Footer'
import Front from '../nikecomponents/Front'
import Header from '../nikecomponents/Header'
import ThisWeek from '../nikecomponents/ThisWeek'
import Trending from '../nikecomponents/Trending'
import Featured from '../nikecomponents/Featured'
import Bottom from '../nikecomponents/Bottom'

const Nike = () => {
    return (
        <div>
            <Header />
            <Front />
            <ThisWeek />
            <Trending />
            <Featured />
            <Apparel />
            <Footer />
            <Bottom />
        </div>
    )
}

export default Nike
