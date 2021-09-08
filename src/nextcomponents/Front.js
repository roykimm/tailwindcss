import React from 'react'

const Front = () => {
    return (
        <>
            <div className="border-2 rounded-lg lg:mx-36">
                <div className="bg-gray-100 py-2 px-2">
                    <button className="text-white bg-red-400 hover:bg-red-300 text-xs py-1 px-3 rounded-md">NEW</button>
                    <p className="pt-3 text-sm"><strong>Next.js 11.1</strong>: ES Modules support, Rust-based tooling, Improved Build Performance.</p>
                    <p className="text-sm"><strong>Learn more →</strong></p>
                </div>
            </div>
            <div className="pt-10 px-2">
                <div className="text-6xl text-center font-extrabold">
                    <p>The React Framework</p>
                    <p className="pt-5">for Production</p>
                </div>
                <div className="text-center pt-5">
                    <p className="text-md text-gray-600">
                        Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript suppert, smart budling, route pre-fetching, and more.No config needed.
                    </p>
                    <div className="flex align-center pt-5 text-center justify-center">
                        <button className="text-white bg-blue-500 py-2 px-12 rounded-md hover:bg-blue-400 shadow">Start Learning</button>
                        <button className="text-gray-400 bg-white shadow py-2 px-12 rounded-md ml-4 hover:shadow-lg">Documentation</button>
                    </div>
                    <div className="flex text-center justify-center mt-8">
                        <p className="p-2 text-gray-500">License: MIT</p>
                        <button className="p-2 ml-5 hover:bg-blue-100 text-blue-500">GitHub</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Front
