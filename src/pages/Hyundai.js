import React from 'react'

const Hyundai = () => {
    return (
        <div>
            {/* topheader */}
            <div className="container">
                <div className="flex">
                    <ul className="flex">
                        <li>개인로그인</li>
                        <li>법인로그인</li>
                        <li>회원가입</li>
                        <li>월드와이드</li>
                        <li>Language</li>
                        <li>채용</li>
                        <li>검색</li>
                    </ul>
                </div>
            </div>
            {/* header */}
            <div className="container">
                <div className="flex">
                    <h1 className="text-bold">HYUNDAI</h1>
                    <div className="text-gray-500 flex">
                        <div className="text-gray-500 px-10 text-md">모델</div>
                        <div className="text-gray-500 px-10 text-md">멤버십&차량관리</div>
                        <div className="text-gray-500 px-10 text-md">이벤트</div>
                        <div className="text-gray-500 px-10 text-md">고객지원</div>
                        <div className="text-gray-500 px-10 text-md">브랜드</div>
                        <div className="text-gray-500 px-10 text-md">회사소개</div>
                    </div>
                </div>
            </div>
            {/* 캐러셀 */}
            <div className="carousel relative rounded overflow-hidden shadow-xl mx-10">
                <div className="carousel-inner relative overflow-hidden w-full">
                    {/* slide-1 */}
                    <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
                        checked="checked" />
                    <div class="carousel-item absolute opacity-0 bg-center" style={{height:"500px" , backgroundImage: "url(https://mdbootstrap.com/img/new/slides/052.jpg)"}}>
                    </div>
                    <label for="carousel-3"
                        class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                        class="fas fa-angle-left mt-3"></i></label>
                    <label for="carousel-2"
                        class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                        class="fas fa-angle-right mt-3"></i></label>
                    
                    {/* label2 */}
                    <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                    <div class="carousel-item absolute opacity-0 bg-center" style={{height:"500px" , backgroundImage: "url(https://mdbootstrap.com/img/new/slides/043.jpg)"}}>
                    </div>
                    <label for="carousel-1"
                        class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                        class="fas fa-angle-left mt-3"></i></label>
                    <label for="carousel-3"
                        class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                        class="fas fa-angle-right mt-3"></i></label>
                
                    {/* <!--Slide 3--> */}
                    <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                    <div class="carousel-item absolute opacity-0" style={{height:'500px', backgroundImage: "url(https://mdbootstrap.com/img/new/slides/054.jpg)"}} >
                    </div>
                    <label for="carousel-2"
                        class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                        class="fas fa-angle-left mt-3"></i></label>
                    <label for="carousel-1"
                        class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                        class="fas fa-angle-right mt-3"></i></label>
                
                    <ol class="carousel-indicators">
                        <li class="inline-block mr-3">
                        <label for="carousel-1"
                            class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                        <label for="carousel-2"
                            class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                        <label for="carousel-3"
                            class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                    </ol>
                </div>
                <div className="text-gray-500 text-ml text-center flex flex-algin-center">
                        <h1 className="mr-20">로그인 하시고 현대자동차의 편리하고 다양한 맞춤형 서비스를 이용해보세요.</h1>

                        <button className="text-blue-600">로그인</button>
                        <button className="text-blue-600">회원가입</button>
                </div>
            </div>



        </div>
    )
}

export default Hyundai
