import React from 'react'
import Laptop1 from '../Images/Laptop1.webp'
import Laptop2 from '../Images/Laptop2.webp'
import Laptop3 from '../Images/Laptop3.jpeg'
import bing from '../Images/bingBrowser.webp'
const LaptopCard = () => {
    return (
        <div className='flex md:flex-row flex-col  py-9 flex-wrap md:space-x-7  justify-center px-4'>
            <div>

            </div>
            <div className="card flex flex-col md:w-1/5">
                <img src={Laptop1} alt="" />
                <h1 className='text-3xl my-4 font-semibold'>Surface Laptop 5</h1>
                <p>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
                <a href="http://" className='my-4 hover:underline text-blue-700 font-semibold'>Learn More</a>
            </div>
            <div className="card flex flex-col md:w-1/5">
                <img src={Laptop2} alt="" />
                <h1 className='text-3xl my-4 font-semibold'>Surface Laptop Studio</h1>
                <p>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
                <a href="http://" className='my-4 hover:underline text-blue-700 font-semibold'>Learn More</a>
            </div>
            <div className="card flex flex-col md:w-1/5">
                <img src={Laptop3} alt="" />
                <h1 className='text-3xl my-4 font-semibold'>Surface Pro 9</h1>
                <p>The tablet flexibility you want and the laptop performance you need — all in one ultra-portable device.</p>
                <a href="http://" className='my-4 hover:underline text-blue-700 font-semibold'>Learn More</a>
            </div>
            <div className="card flex flex-col md:w-1/5">
                <img src={bing} alt="" />
                <h1 className='text-3xl my-4 font-semibold'>Introducing the new Bing</h1>
                <p>Your AI-powered copilot for the web. Ask questions. Chat to refine results. Get comprehensive answers and creative inspiration.</p>
                <a href="http://" className='my-4 hover:underline text-blue-700 font-semibold'>Join the bing Preview</a>
                <a href="http://" className='my-4 hover:underline text-blue-700 font-semibold'>Learn About the image Creater in Bing</a>
            </div>

        </div>
    )
}

export default LaptopCard