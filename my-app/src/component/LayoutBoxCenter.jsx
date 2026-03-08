import React from 'react'

function LayoutBoxCenter({title,body}) {
    return (
        <div className='min-h-screen bg-gray-100 flex justify-center items-center p-4'>
            <div className='w-full max-w-[350px] p-6 bg-white text-center rounded-lg shadow-lg hover:shadow-xl transition'>
                <h2 className='text-xl font-bold text-blue-500 md:text-2xl'>
                    {title}
                </h2>
                <p className='text-sm md:text-base text-gray-500 '>
                    {body}
                </p>
            </div>
        </div>
    )
}

export default LayoutBoxCenter