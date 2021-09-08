import React, { useState } from 'react'
import dataset from './dataset';

const Apparel = () => {
    const [ datas , setDatas ] = useState(dataset.apparelData);
    return (
        <div className="bg-white px-10">
            <div>
                <h2 className="">Apparel Essentials</h2>
            </div>
            <div className="flex align-center justify-between">
                {
                    datas.map((data) => {
                        const { id, title1, imageUrl } = data;
                        return (
                            <div className="relative px-2" key={id}>
                                <p className="absolute font-semibold mt-24 ml-10 text-lg">{title1}</p>
                                <img src={process.env.PUBLIC_URL + imageUrl} alt="..." />
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Apparel
