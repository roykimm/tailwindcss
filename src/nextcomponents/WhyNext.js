import React, { useState } from 'react'
import dataset from './dataset.js';


const WhyNext = () => {

    const [ datas, setDatas ] = useState(dataset.whyData);

    return (
        <div className="pt-20 pb-3">
            <div className="text-center">
                <h2 className="font-bold text-3xl text-black">Why Next.js</h2>
                <p className="text-md text-gray-500 py-3">The world's leading companies use and love Next.js</p>
            </div>
            <div className="py-10">
                <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2">
                    {
                        datas.map((data) => {

                            const {id, title, cont} = data;
                            return (
                                <div key={id} className="border-solid border-2 p-5 m-3 shadow-md cursor-pointer hover:shadow-xl">
                                    <p className="py-1 text-lg font-semibold">{title}</p>
                                    <p className="py-1 text-sm">{cont}</p>
                                    <p className="py-1 text-sm text-blue-500 cursor-pointer hover:text-blue-300">Documentation →</p>
                                </div>           
                            )
                        })
                    }
                    <div key='single' className="border-solid border-2 p-5 m-3 shadow-md cursor-pointer hover:shadow-xl lg:hidden">
                        <p className="py-1 text-lg font-semibold">And More.</p>
                        <p className="py-1 text-sm">Support for environment variables, preview mode, custom `head` tags, automatic polyfills, and more</p>
                        <p className="py-1 text-sm text-blue-500 cursor-pointer hover:text-blue-300">Documentation →</p>
                    </div>
                </div>
                <div className="text-center hidden lg:inline">
                    <p className="text-sm p-5"><strong>And more :</strong> Support for environment variables, preview mode, custom `head` tags, automatic polyfills, and more.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyNext
