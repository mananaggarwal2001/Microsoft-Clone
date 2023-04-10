import React from 'react'
import icon1 from '../Images/icon1.webp'
import icon2 from '../Images/icon2.webp'
import icon3 from '../Images/icon3.webp'
const Icons = () => {
    return (
        <div className='promo flex justify-evenly items-center flex-wrap py-5 space-y-4 space-x-4'>
            <div>

            </div>
            <div className="item flex flex-col items-center space-y-2">
                <img src={icon1} alt="" />
                <span className='font-semibold cursor-pointer hover:underline'>Choose your Microsoft 365</span>
            </div>
            <div className="item flex flex-col items-center space-y-2 ">
                <img src={icon2} alt="" />
                <span className='font-semibold cursor-pointer hover:underline'>Explore Surface Devices</span>
            </div>
            <div className="item flex flex-col items-center space-y-2">
                <img src={icon3} alt="" />
                <span className='font-semibold cursor-pointer hover:underline'>Buy Xbox Games</span>
            </div>
            <div className="item flex flex-col items-center space-y-2">
                <img src={icon1} alt="" />
                <span className='font-semibold cursor-pointer hover:underline'>Download the Windows 11</span>
            </div>
        </div>
    )
}

export default Icons