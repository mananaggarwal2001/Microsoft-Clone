import React from 'react'

const Bottom = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <div className='flex md:flex-row flex-col justify-evenly py-10 px-2 bg-[#f2f2f2]'>
                <div className="card flex flex-col">
                    <h1 className='font-semibold text-xl mb-5 text-slate-500'>What's new</h1>
                    <ul className='flex flex-col'>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft 365</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Games</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Surface Pro 9</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Surface Laptop 5</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Surface Laptop Studio</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Surface Laptop Go 2</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Windows 11 apps</li>
                    </ul>
                </div>
                <div className="card flex flex-col">
                    <h1 className='font-semibold text-xl mb-5 text-slate-500'>Microsoft Store</h1>
                    <ul className='flex flex-col'>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Account Profile</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Download Center</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Store Support</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Returns</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Order Tracking</li>
                    </ul>
                </div>
                <div className="card flex flex-col">
                    <h1 className='font-semibold text-xl mb-5 text-slate-500'>Education</h1>
                    <ul className='flex flex-col'>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft in Education</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Devices for education</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Teams for Education</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft 365 Education</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Office Education</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Educator training and development</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Deals for students and parents</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Azure for students</li>
                    </ul>
                </div>
                <div className="card flex flex-col">
                    <h1 className='font-semibold text-xl mb-5 text-slate-500'>Business</h1>
                    <ul className='flex flex-col'>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Cloud</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Security</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Azure</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Dynamics 365</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft 365</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Advertising</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Industry</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Teams</li>
                    </ul>
                </div>
                <div className="card flex flex-col">
                    <h1 className='font-semibold text-xl mb-5 text-slate-500'>Developer & IT</h1>
                    <ul className='flex flex-col'>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Developer Center</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Documentation</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Learn</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Tech Community</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Azure Marketplace</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>AppSource</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Microsoft Power Platform</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Visual Studio</li>
                    </ul>
                </div>
                <div className="card flex flex-col">
                    <h1 className='font-semibold text-xl mb-5 text-slate-500'>Company</h1>
                    <ul className='flex flex-col'>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Careers</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>About Microsoft</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Company news</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Privacy at Microsoft</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Investors</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Security</li>
                        <li className='text-xs cursor-pointer mb-5 hover:underline'>Sustainability</li>
                    </ul>
                </div>

            </div>
            <div className=" bg-[#f2f2f2] flex md:flex-row flex-col md:justify-evenly px-4">
                <div className='font-semibold text-xs md:text-sm mb-5 text-slate-500 me-40 text-[10px] cursor-pointer hover:underline'>English(India)</div>
                <div className="secondContainer">
                    <ul className='flex md:flex-row md:space-x-6  font-semibold text-[10px] md:text-sm mb-5 text-slate-500'>
                        <li></li>
                        <li className='cursor-pointer hover:underline me-[0.5rem] '>Contact</li>
                        <li className='cursor-pointer hover:underline me-[0.5rem] '>Microsoft Privacy</li>
                        <li className='cursor-pointer hover:underline me-[0.5rem] '>Terms of use</li>
                        <li className='cursor-pointer hover:underline me-[0.5rem] '>Trademarks About our ads</li>
                        <li className='cursor-pointer hover:underline '> &copy; Microsoft {date}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Bottom