import React from 'react'
import Navbar from './Navbar'
import UpperSection from './UpperSection'
import Icons from './Icons'

const Mainbody = () => {
    return (
        <>
            <Navbar />
            <div>
                <UpperSection/>
            </div>
            <div className='md:px-52'>
                <Icons/>
            </div>
        </>
    )
}

export default Mainbody