import React from 'react'
import ForBusiness1 from '../Images/ForBusiness1.webp'
import ForBusiness2 from '../Images/ForBusiness2.webp'
import ForBusiness3 from '../Images/ForBusiness3.webp'
import ForBusiness4 from '../Images/ForBusiness4.webp'
const ForBusiness = () => {
    return (
        <>
            <div className="px-[7.2rem]">

                <h1 className='text-4xl font-semibold mt-20 mb-6'>For Business</h1>
                <div className=' flex md:flex-row flex-col'>
                    <div>

                    </div>
                    <div className=" flex flex-col card md:w-1/4 me-4">
                        <img src={ForBusiness1} alt="" />
                        <h1 className='text-3xl my-10 font-semibold'>Surface For Business Family</h1>
                        <p className='font-normal'>Surface for Business devices enable work on your team's terms with flexibility, built-in security and the power they need to succeed.</p>
                        <a href="" className='hover:underline text-blue-900 font-semibold w-fit mt-5'>Learn More</a>
                    </div>
                    <div className=" flex flex-col card md:w-1/4 me-4">
                        <img src={ForBusiness2} alt="" />
                        <h1 className='text-3xl my-10 font-semibold'>Try Microsoft 365 For Free</h1>
                        <p className='font-normal'>Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial.</p>
                        <a href="" className='hover:underline text-blue-900 font-semibold w-fit mt-5'>Start Your Free Trial</a>

                    </div>
                    <div className=" flex flex-col card md:w-1/4 me-4">
                        <img src={ForBusiness3} alt="" />
                        <h1 className='text-3xl my-10 font-semibold'>Thrive in Hybrid World</h1>
                        <p className='font-normal'>Discover tools, resources and strategies to help your employees succeed in the new world of flexible work.</p>
                        <a href="" className='hover:underline text-blue-900 font-semibold w-fit mt-5'>Learn More</a>
                    </div>
                    <div className=" flex flex-col card md:w-1/4 ">
                        <img src={ForBusiness4} alt="" />
                        <h1 className='text-3xl my-10 font-semibold'>Visual Studio 2022</h1>
                        <p className='font-normal'>Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.</p>
                        <a href="" className='hover:underline text-blue-900 font-semibold w-fit mt-5'>Download Visual Studio 2022</a>
                    </div>
                </div>
            </div>
            <div className="container px-[7.2rem] mt-24 mb-24">

                <div className="links flex flex-wrap items-center">
                    <h1 className='me-3'>Follow Microsoft</h1>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" className='cursor-pointer w-9 me-3' alt="" />
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter%202x?scl=1" className='cursor-pointer w-9 me-3' alt="" />
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1" className='cursor-pointer w-9 me-3' alt="" />
                </div>
            </div>
        </>
    )
}

export default ForBusiness