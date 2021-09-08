import React from 'react'
import logo from '../images/logo.jpg'

const Test = () => {
    return (
        <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-bold text-xl">Biznet</span>
            </div>

            <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
                <div className="text-sm sm:flex-grow">
                <a
                    href="#"
                    className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                >
                    Your Business
                </a>
                <a
                    href="#"
                    className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                >
                    Networking
                </a>
                <a
                    href="#"
                    className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
                >
                    Blog
                </a>
                </div>
                <div>
                <a
                    href="#"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
                    >Login
                </a>
                </div>
            </div>
        </nav>
        <div className="container">
            
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Find Friend
            </button>
            <button className="btn btn-blue">
                Find Groups
            </button>

            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role="alert">
                <strong className="font-bold">Alert! </strong>
                <span className="block sm:inline">Please update your password</span>
            </div>

            <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
                <div className="flex-shrink-0">
                    <img src={logo} alt="" className="h-12 w-12"/>
                </div>
                <div className="ml-6 pt-1">
                    <h4 className="text-xl text-gray-900">Gobella</h4>
                    <p className="text-base text-gray-600">You have a messge!</p>
                </div>
            </div>

            <div className="container mt-5 mx-auto px-2">
                <div className="md:flex">
                    <div
                        className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded"
                    >
                    <div className="lg:flex lg:items-center">
                        <div className="lg:flex-shrink-0">
                        <img className="rounded-lg lg:w-64" src="https://i.ibb.co/mJJNkTJ/img2.jpg" alt="" />
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                        <div
                            className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
                        >
                            Networking
                        </div>
                        <a
                            href="#"
                            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                            >Finding connections to help your business grow</a
                        >
                        </div>
                    </div>
                    </div>
                    <div
                        className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded"
                    >
                    <div className="lg:flex lg:items-center">
                        <div className="lg:flex-shrink-0">
                        <img className="rounded-lg lg:w-64" src="https://i.ibb.co/w4wGYvQ/img1.jpg" alt="" />
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                        <div
                            className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
                        >
                            Marketing
                        </div>
                        <a
                            href="#"
                            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                            >Finding customers for your new business</a
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Test
