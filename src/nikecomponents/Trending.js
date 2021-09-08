import React, { useState } from 'react';
import dataset from './dataset';

const Trending = () => {

    const [datas, setDatas ] = useState(dataset.trendingData);

    return (
        <div className="bg-white px-10 pb-20">
            <h2 className="text-2xl font-semibold pb-5">Trending Now</h2>
            <div className="grid grid-cols-2">
                {
                    datas.map((data) => {
                        const {id, title1, title2, imageUrl} = data;
                        return (
                            <div className="relative mx-1">
                                <img className="w-full h-full" src={process.env.PUBLIC_URL + imageUrl} alt="" />                             
                                <div className="absolute top-2/3 left-10">
                                    <p className="text-white font-semibold text-lg">{title1}</p>
                                    <button className="bg-white text-gray-900 inline text-md font-semibold px-5 py-2 rounded-3xl mt-2 hover:bg-opacity-90">
                                        구매하기
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Trending
