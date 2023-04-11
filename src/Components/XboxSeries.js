import React from 'react'
import Xbox from '../Images/XboxSeriesBackground.avif'
const XboxSeries = () => {
    const style = {
        backgroundImage: `url(${Xbox})`,
        backgroundPosition:'left',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='  md:px-[7.5rem]'>
            <div className=' flex justify-end items-center h-[40rem] px-52' style={style}>
                <div className='flex flex-col justify-start items-start my-auto'>
                    <h1 className='text-4xl font-semibold'>Xbox Series X</h1>
                    <p className='my-6'>The fastest,most powerful Xbox ever</p>
                    <button className="btn bg-blue-700 cursor-pointer text-white font-semibold py-2 px-3 hover:bg-blue-900">Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default XboxSeries