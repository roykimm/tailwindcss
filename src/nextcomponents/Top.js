import React from 'react'
import Logo from '../images/vercel-logo.png'

const Top = () => {
    return (
        <div className="bg-black text-white py-3 flex align-center justify-between text-md">
            <div>
                <img className="ml-5 w-20" src={Logo} alt="logo..." />
            </div>
            <div className="mr-5">
                <p>Deploy <strong>Next.js</strong> in seconds →</p>
            </div>
        </div>
    )
}

export default Top
