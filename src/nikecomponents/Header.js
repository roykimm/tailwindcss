import React from 'react'
import Logo from '../images/nike-logo.png'
import {BsBag, BsSearch, BsHeart} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => {
    return (
        <div>
            <header className="bg-white flex align-center justify-between md:hidden">
                <div className="py-2 px-5">
                    <img className="h-7" src={Logo} alt="nike logo..." />
                </div>
                <div className="flex align-center py-2 px-5 text-xl">
                    <BsBag className="text-gray-800 hover:bg-gray-200 ml-3" />
                    <BsSearch className="text-gray-800 hover:bg-gray-200 ml-5" />
                    <GiHamburgerMenu className="text-gray-800 hover:bg-gray-200 ml-5" />
                </div>
            </header>
            <header className="bg-white align-center justify-between py-2 hidden md:flex md:justify-even">
                <div className="py-2 px-5">
                    <img className="h-7" src={Logo} alt="nike logo..." />
                </div>
                <div className="flex text-center align-center justify-start">
                    <p className="text-lg font-semibold py-2 px-2">New Release</p>
                    <p className="text-lg font-semibold py-2 px-2">Men</p>
                    <p className="text-lg font-semibold py-2 px-2">Women</p>
                    <p className="text-lg font-semibold py-2 px-2">Kids</p>
                </div>
                <div className="flex align-center">
                    <div className="flex align-center justify-center bg-gray-200 rounded-2xl">
                        <BsSearch className="text-xl mt-3 mx-3" />
                        <input className="bg-gray-200 rounded-r-2xl focus:border-white" placeholder="검색" />
                    </div>
                    <BsHeart className="text-gray-800 hover:text-gray-400 ml-5 text-xl mt-3 font-bold cursor-pointer" />
                    <BsBag className="text-gray-800 hover:texg-gray-400 mx-5 text-xl mt-3 font-bold cursor-pointer" />
                </div>
            </header>
        </div>
    )
}

export default Header
