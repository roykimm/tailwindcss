import React from 'react'
import Logo from '../images/logo.jpg'

// install react icons

import { FaBars, FaSearch, FaShoppingCart , FaUserPlus } from 'react-icons/fa';

function Header() {
    return (
        <header className="flex items-center justify-between py-3">
            <div className="menu-btn flex sm:hidden">
                {/* Hamburger menu */}
                <div className="mx-4">
                    <FaBars />
                </div>
                <div>
                    <FaSearch />
                </div>
            </div>
            <div className="logo flex ">
                <div>
                    <img src={Logo} alt="bella" />
                </div>
                <ul className="flex sm:hidden">
                    <li className="ml-2">Microsoft 365</li>
                    <li className="ml-2">Office</li>
                    <li className="ml-2">Window</li>
                    <li className="ml-2">Surface</li>
                    <li className="ml-2">Xbox</li>
                    <li className="ml-2">Delas</li>
                    <li className="ml-2">Support</li>
                </ul>
            </div>

            <div className="cart flex sm:hidden">
                <div>
                    <FaShoppingCart />
                </div>
                <div className="mx-4">
                    <FaUserPlus />
                </div>
            </div>
            <div className="">
                <ul className="flex md:hidden">
                    <li className="ml-2">All Microsoft</li>
                    <li className="ml-2">Search</li>
                    <li className="ml-2">Cart</li>
                    <li className="ml-2">Sign In</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
