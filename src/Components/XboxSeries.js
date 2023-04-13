import React from 'react'
import Xbox from '../Images/XboxSeriesBackground.avif'
const XboxSeries = () => {
    const style = {
        backgroundImage: `url(${Xbox})`,
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='  md:px-[7.5rem] px-[2rem]'>
            <div className=' hidden md:flex  md:justify-end md:items-center md:h-[40rem] md:px-52' style={style}>
                <div className=' hidden md:flex flex-col justify-start items-start my-auto'>
                    <h1 className='text-4xl font-semibold'>Xbox Series X</h1>
                    <p className='my-6'>The fastest,most powerful Xbox ever</p>
                    <button className="btn bg-blue-700 cursor-pointer text-white font-semibold py-2 px-3 hover:bg-blue-900">Shop Now</button>
                </div>
            </div>
            <img src={Xbox} className='md:hidden flex' alt="" srcset="" />
            <div className="container md:hidden shadow-md shadow-black p-5">
                <h1 className='text-3xl font-semibold'>Xbox Series X</h1>
                <p className='my-3'>The fastest,most powerful Xbox ever</p>
                <button className="btn bg-blue-700 cursor-pointer text-white font-semibold py-2 px-3 hover:bg-blue-900">Shop Now</button>
            </div>
        </div>
    )
}

export default XboxSeries