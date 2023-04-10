import React from 'react'
import coverpage from '../Images/XboxGame.jpeg'
const UpperSection = () => {
    const style = {
        backgroundImage: `url(${coverpage})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: ''
    }
    return (
        <div className='silder flex flex-col'>
            <img src={coverpage} className='md:hidden' alt="" />
            <div className="left bg-[#ffffff] md:bg-[#1a1a1a] md:text-white justify-center items-center md:hidden">
                <div className="textColor  flex  flex-col  h-fit items-left ps-9 shadow-md shadow-black">
                    <h1 className='text-4xl text-left my-3 font-semibold'>Xbox Game Pass</h1>
                    <p className='text-left my-3'>
                        Play hundreds of high-quality games on your console and PC, <br></br>including new games on day one, online multiplayer and EA Play
                    </p>
                    <button className="btn text-left my-3 bg-blue-600 w-fit py-2 px-3 font-bold cursor-pointer hover:bg-blue-700 text-white ">Compare All Plans</button>
                </div>
            </div>
            <div className='right text-white max-h-full h-96 justify-center items-center hidden md:block' style={style}>
                <div className="flex justify-start items-center">
                    <div className="textColor ms-24 flex  flex-col justify-start h-fit self-center">
                        <h1 className='text-4xl text-left my-3'>Xbox Game Pass</h1>
                        <p className='text-left my-3'>
                            Play hundreds of high-quality games on your console and PC, <br></br>including new games on day one, online multiplayer and EA Play
                        </p>
                        <button className="btn text-left my-3 bg-blue-600 w-fit py-2 px-3 font-semibold cursor-pointer hover:bg-blue-700">Compare All Plans</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperSection