import React, { useState } from 'react'
import {BiMap} from 'react-icons/bi';
import {FiTwitter}  from 'react-icons/fi';
import {AiOutlineFacebook} from 'react-icons/ai';
import {FaInstagram, FaYoutube} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="bg-black text-xs text-gray-500">
            <div className="px-10 py-5">
                <div className="grid grid-cols-2 text-center md:grid-cols-4">
                    <div className="text-sm text-gray-200 pb-2 ">
                        <div className="flex justify-center">
                            <p className="px-1 hover:text-gray-200 cursor-pointer">주문배송</p>
                            <p className="px-1 hover:text-gray-200 cursor-pointer">매장안내</p>
                        </div>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">나이키저널</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">로그인</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">멤버 가입</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">고객센터</p>
                    </div>
                    <div className="pb-2">
                        <p className="text-sm text-gray-200">고객센터</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">010-7353-5387</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">주문/결제</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">배송</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">주문배송조회</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">멤버쉽 혜택/서비스</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">공지사항</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">1:1채팅문의</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">1:1이메일문의</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">이용약관</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">개인정보처리방침</p>
                    </div>
                    <div className="pb-2">
                        <p className="text-sm text-gray-200">ABOUT NIKE</p>
                        <p className="pt-1 hover:text-gray-200 cursor-pointer">나이키에 대하여</p>
                    </div>
                    <div className="pb-2">
                        <p className="text-sm text-gray-200">SOCIAL</p>
                        <div className="flex align-center justify-center text-xl pt-1">
                            <FiTwitter className="mx-1 hover:text-gray-200 cursor-pointer"/>
                            <AiOutlineFacebook className="mx-1 hover:text-gray-200 cursor-pointer"/>
                            <FaYoutube className="mx-1 hover:text-gray-200 cursor-pointer"/>
                            <FaInstagram className="mx-1 hover:text-gray-200 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="px-10 py-5">
                <div className="flex text-center justify-center align-center">
                    <BiMap className="text-gray-100"/>
                    <p className="text-gray-100 pl-2">대한민국</p>
                    <p className="pl-2">&copy; 2021 Gobella, Inc. All Rights Reserved</p>
                </div>
                <div className="flex text-center justify-center pt-5">
                    <p className="px-3 hover:text-gray-200 cursor-pointer">이용약관</p>
                    <p className="px-3 hover:text-gray-200 cursor-pointer">개인정보처리방침</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
