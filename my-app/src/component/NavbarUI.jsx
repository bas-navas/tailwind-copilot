import React from 'react'

function NavbarUI() {
    return (
        <nav className='bg-white py-6 shadow'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>

                <h1 className='text-2xl font-bold text-blue-500'>MyApp</h1>
                <ul className='flex gap-4 items-center'>
                    <li className='text-base text-gray-600 hover:text-blue-500 cursor-pointer'>Home</li>
                    <li className='text-base text-gray-600 hover:text-blue-500 cursor-pointer'>About</li>
                    <li className='text-base text-gray-600 hover:text-blue-500 cursor-pointer'>Contact</li>
                </ul>
                <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition'>
                    Login
                </button>
            </div>
        </nav>
    )
}

export default NavbarUI
// ใน li เขานิยมใช้ text-xl text-lg หรืออะไรกันครับ