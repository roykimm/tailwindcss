import React from 'react'
import vercelLogo from '../images/vercel-logo.png'

const Footer = () => {
    return (
        <div className="bg-gray-200 pb-10">
            <div className="grid grid-cols-2 lg:flex x-4 py-8 align-center justify-around">
                <div className="p-5">
                    <p className="text-md font-semibold pb-4">General resources</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Docs</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Learn</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Showcase</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Blog</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Analytics</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Next.js Conf</p>
                </div>
                <div className="p-5">
                    <p className="text-md font-semibold pb-4">More</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Commerce</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Contact Sales</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">GitHub</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Releases</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Telemetry</p>
                </div>
                <div className="p-5">
                    <p className="text-md font-semibold pb-4">About Vercel</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Open Source Software</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">GitHub</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Twitter</p>
                </div>
                <div className="p-5">
                    <p className="text-md font-semibold pb-4">Legal</p>
                    <p className="text-gray-500 text-sm py-1 cursor-pointer hover:text-gray-700">Privacy Policy</p>
                </div>
            </div>
            <div className="px-10">
                <img className="w-20 my-2" src={vercelLogo} alt="" />
                <p className="text-gray-500 text-sm">Copyright &copy; 2021 Gobella, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
