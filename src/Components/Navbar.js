import React from 'react'
import logo from '../Images/microsoftLogo.png'
const Navbar = () => {
    return (
        <>
            <div className=' flex justify-between items-center p-4'>
                <div className='flex justify-center items-center md:order-2'>
                    <div className="hamburger cursor-pointer me-3 md:hidden ">
                        <div className="line h-0.5 w-5 my-1 bg-black"></div>
                        <div className="line h-0.5 w-5 my-1 bg-black"></div>
                        <div className="line h-0.5 w-5 my-1 bg-black"></div>
                    </div>
                    <div className="searchIcon block md:hidden w-5"> <svg class="svg-icon search-icon ms-5" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg></div>
                </div>

                <div className="logo text-center md:order-1 flex">
                    <div className='p-3 md:w-1/4 w-2/3'>
                        <img src={logo} alt="" />
                    </div>
                    <div className="features  w-fit md:w-auto bg-gray-200 md:bg-white absolute md:static inset-0 md:flex space-x-7 md:mx-4 -translate-x-96 md:translate-x-0 md:items-center">
                        <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Microsoft 365</div>
                        <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Teams</div>
                        <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">windows</div>
                        <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Surface</div>
                        <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Xbox</div>
                        <div className="fitem hover:underline hover:underline-offset-8 cursor-pointer">Support</div>
                    </div>

                </div>
                <div className="cart md:hidden">
                    <span class="material-symbols-outlined text-3xl">
                        shopping_cart
                    </span>
                </div>
                <div className='md:order-2 md:flex hidden'>
                    <div className="searchIcon">All Microsoft  <svg class="svg-icon search-icon  ms-2 me-3 font-bold" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg></div>
                    <div className="searchIcon ">
                        <span class="material-symbols-outlined text-3xl">
                            shopping_cart
                        </span>
                        <span class="material-symbols-outlined text-3xl ms-4">
                          account_circle
                        </span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar