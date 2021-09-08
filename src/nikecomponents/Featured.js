import React, { useState } from 'react'
import dataset from './dataset';

const Featured = () => {

    const [datas, setDatas ] = useState(dataset.featuredData);
    return (
        <div className="bg-white px-10 pb-20">
            <h2 className="text-2xl font-semibold pb-5">Featured Shoes</h2>
            <div className="flex whitespace-nowrap space-x-2 overflow-x-scroll overscroll-x-contain">
                {
                    datas.map((data) => {
                        const { id, title1, title2, price, imageUrl } = data;

                        return (
                            <div className="relative">
                                <img className="w-96" src={process.env.PUBLIC_URL + imageUrl} alt="..." />
                                <div className="">
                                    <p className="font-semibold mt-3 text-lg ">{title1}</p>
                                    <p className="text-sm text-gray-600 mt-1">{title2}</p>
                                    <p className="text-md text-gray-600 mt-1">{price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Featured
