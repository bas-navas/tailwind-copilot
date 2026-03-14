import React from 'react'

function HeroUI() {
    return (
        <section className='bg-gray-100 py-20'>
            <div className='max-w-6xl mx-auto text-center px-4'>
                <h2 className=' text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-6'>
                    Build Better Products Faster</h2>
                <p className='max-w-xl mx-auto text-gray-600 mb-6 text-sm'>
                    Manage your workflow with our powerful platform</p>

                <div className='flex gap-4 justify-center'>
                    <button className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition'>Get Started</button>
                    <button className='border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-50 transition'>Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default HeroUI