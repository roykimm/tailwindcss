import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';

const Send = () => {
    return (
        <div className="pt-5 pb-20">
            <div className="flex align-center justify-between">
                <div>
                    <p className="text-black font-semibold text-2xl">
                        Next.js is getting better every day -<br />
                        don't miss out on all the action.
                    </p>
                    <p className=" text-gray-500 text-md mt-3">
                        Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.
                    </p>
                </div>
                <div className="">
                    <div className="mt-10">
                        <div className="flex border-solid border-2 align-center justify-center rounded-lg">
                            <AiOutlineMail className="text-lg mt-2" />
                            <input className="pl-3 py-1 block w-58" type="text" placeholder="you@domain.com"/>
                        </div>
                        <button className="bg-black rounded-lg text-white w-64 py-2 mt-3">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Send
