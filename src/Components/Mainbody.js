import React from 'react'
import Navbar from './Navbar'
import UpperSection from './UpperSection'
import Icons from './Icons'
import LaptopCard from './LaptopCard'

const Mainbody = () => {
    return (
        <>
            <Navbar />
            <div>
                <UpperSection />
            </div>
            <div className='md:px-52'>
                <Icons />
            </div>
            <div>
                <LaptopCard />
            </div>
        </>
    )
}

export default Mainbody