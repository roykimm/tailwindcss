import React from 'react'
import authImg from '../images/auth.png'
import binanceImg from '../images/binance.png'
import dockerImg from '../images/docker.png'
import githubImg from '../images/github.png'
import huluImg from '../images/hulu.png'
import jetImg from '../images/jet.png'
import magicleapImg from '../images/magicleap.png'
import netflixImg from '../images/netflix.png'
import scaleImg from '../images/scale.png'
import truliaImg from '../images/trulia.png'


const WhoNext = () => {
    return (
        <div className="pb-10">
            <div className="text-lg text-gray-400 text-center overflow-hidden">
                <div className="flex align-center justify-between">
                    <img src={authImg} alt="" />
                    <img src={binanceImg} alt="" />
                    <img src={dockerImg} alt="" />
                    <img src={githubImg} alt="" />
                    <img src={huluImg} alt="" />
                </div>
                <div className="flex align-center justify-between">
                    <img src={jetImg} alt="" />
                    <img src={magicleapImg} alt="" />
                    <img src={netflixImg} alt="" />
                    <img src={scaleImg} alt="" />
                    <img src={truliaImg} alt="" />
                </div>
            </div>
            <div className="flex align-center justify-center pt-10">
                <div className="flex border-solid border-2 text-center align-center justify-center px-5 rounded-lg bg-white">
                    <img src={huluImg} alt="" className="" />
                    <button className="w-60 h-12 mt-2 text-md text-white bg-blue-500 px-8 rounded-lg ml-8 shadow-lg hover:bg-blue-300">Read Case Study</button>
                </div>
            </div>
            <div className="pt-5 pb-2">
                <p className="text-black text-3xl font-bold text-center">Who's Using Next.js</p>
                <p className="text-md text-center text-gray-500 py-5">
                    We're honored some of the most talented creatives out ther build with Next.js
                </p>
            </div>
        </div>
    )
}

export default WhoNext
