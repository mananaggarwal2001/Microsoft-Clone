import React from 'react'
import Navbar from './Navbar'
import UpperSection from './UpperSection'
import Icons from './Icons'
import LaptopCard from './LaptopCard'
import XboxSeries from './XboxSeries'
import ForBusiness from './ForBusiness'
import Bottom from './Bottom'

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
            <div>
                <XboxSeries/>
            </div>
            <div>
                <ForBusiness/>
            </div>
            <div className="bottom">
                <Bottom/>
            </div>
        </>
    )
}

export default Mainbody