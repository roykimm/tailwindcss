import React, { useState } from 'react'
import dataset from './dataset';

const ThisWeek = () => {

    const [ datas , setDatas ] = useState(dataset.thisWeekData);
    console.log(datas)

    return (
        <div className="bg-white px-10 pb-10">
            <div className="">
                <h2 className="text-2xl font-semibold pb-5">이번 주 스타일링</h2>
                {datas.map((data) => {
                    const {id, title1, title2, imageUrl, type} = data;
                    return (
                        <div className="text-center mb-10">
                            {
                                type === 'mp4' 
                                    ? <video autoPlay muted src={process.env.PUBLIC_URL + imageUrl} alt="" /> 
                                    : <img className="mx-auto" src={process.env.PUBLIC_URL + imageUrl} alt="" /> 
                            }
                            <p className="font-bold text-3xl mt-5 mb-3">{title1}</p>
                            <p className="font-semibold text-md mb-5">{title2}</p>
                            <div className="">
                                <button className="bg-gray-900 text-white px-7 py-2 rounded-3xl hover:opacity-80">구매하기</button>
                                <button className="bg-gray-900 text-white px-7 py-2 rounded-3xl hover:opacity-80 ml-2">더 많은 스타일 보기</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default ThisWeek
