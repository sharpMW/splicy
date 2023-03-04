import React from 'react'

export default function Nav() {
    return (
        <div className='relative'>
            <header className="text-gray-600 body-font bg-white bg-opacity-5 p-2 z-50 fixed top-0 left-0 right-0">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-white text-6xl">LOGO</span>
                    </a>
                    <div className="btns">
                        <button className="inline-flex items-center text-white focus:outline-none rounded text-base mt-4 md:mt-0 mr-4 p-2 font-medium">Login
                        </button>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded-3xl font-medium text-base mt-4 md:mt-0">Signup
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}
