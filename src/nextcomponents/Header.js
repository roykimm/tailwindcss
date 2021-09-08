import React from 'react'
import Logo from '../images/nextjs-logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    return (
        <div className="pb-5">
            <div className="flex align-center justify-between pb-2">
                <div className="">
                    <img className="w-24" src={Logo} alt="" />
                </div>
                <div className="flex align-center justify-center py-2">
                    <button className="bg-blue-500 text-white px-5 rounded-lg hover:bg-blue-400 mr-2">Learn</button>
                    <div className="md:hidden cursor-pointer hover:bg-gray-200 block py-1">
                        <GiHamburgerMenu className="text-3xl" />
                    </div>
                </div>
                
            </div>
            <div className="hidden md:flex text-center align-center justify-around pb-5">
                <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-800">Showcase</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-800">Docs</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-800">Live</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-800">Analytics</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-800">Commerce</p>
                <p className="text-sm text-gray-500 cursor-pointer hover:text-gray-800">Enterprise</p>
            </div>
        </div>
    )
}

export default Header
