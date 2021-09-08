import React, {useState} from 'react'
import dataset from './dataset';

const Front = () => {

    const [datas, setDatas] = useState(dataset.frontData);

    return (
        <div className="text-center bg-white px-5 pb-10">
            {datas.map((data) => {
                    const { id, title1, title2, title3, imageUrl1, imageUrl2 } = data
                    return (
                        <div className="" key={id}>
                            <div className="grid grid-cols-2 px-5">
                                <img className="object-cover h-64 w-full" src={process.env.PUBLIC_URL + imageUrl1} alt={title2} />
                                <img className="object-cover h-64 w-full ml-3" src={process.env.PUBLIC_URL + imageUrl2} alt={title2} />
                            </div>
                            <p className="font-bold text-lg mt-5">{title1}</p>
                            <p className="font-bold text-3xl mt-2">{title2}</p>
                            <p className="font-semibold text-sm mt-2">{title3}</p>
                            <div className="mt-5 mb-10">
                                <button className="bg-gray-900 text-white px-7 py-2 rounded-3xl hover:opacity-80">구매하기</button>
                                <button className="bg-gray-900 text-white px-7 py-2 rounded-3xl hover:opacity-80 ml-2">자세히보기</button>
                            </div>
                        </div>
                    )
            })}
        </div>
    )
}
export default Front
