import React, { useState } from 'react'

const Bottom = () => {
    return (
        <div className="bg-gray-900 text-gray-500 text-xs px-10 p-10">
            <p className="py-1">(유)GOBELLA</p>
            <p className="py-1">대표 : 김명훈</p>
            <p className="py-1">부산광역시 부산진구 양정1동 현대아파트</p>
            <p className="py-1">통신판매업신고 : 2000-부산양정-03461</p>
            <p className="py-1">등록번호 : 20003394384-348</p>
            <p className="py-1">고객센터 전화문의 <a className="text-white underline cursor-pointer">070-1919-1919</a></p>
            <p className="py-1">FAX : 02-2882-2929</p>
            <p className="py-1">E-main : roykimmyunghoon@gmail.com</p>
            <p className="py-1">호스팅서비스사업자 : 고벨라</p>
            <p className="py-5">안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KG이니시스의 구매 안전 서비스(채무지급보증)를 이용하실수 있습니다.</p>
            <p className="py-3">온라인디지털콘텐츠사업발전법에 의한 <a className="text-white underline cursor-pointer" href="">콘텐츠보호안내 자세히보기</a></p>
            <div className="mt-5 flex align-center text-center justify-center">
                <p className="cursor-pointer hover:text-gray-100">사업자정보확인</p>
                <p className="px-3">|</p>
                <p className="cursor-pointer hover:text-gray-100">콘텐츠보호안내 자세히보기</p>
            </div>
        </div>
    )
}

export default Bottom
