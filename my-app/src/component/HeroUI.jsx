import React from 'react'

function HeroUI() {
    return (
        <section className='bg-gradient-to-r from-cyan-500 to-blue-500 py-32'>
            <div className='max-w-6xl mx-auto text-center px-4'>
                <h2 className=' text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6'>
                    Build Better Products Faster</h2>
                <p className='max-w-xl mx-auto text-blue-100 mb-6 text-sm'>
                    Manage your workflow with our powerful platform</p>

                <div className='flex gap-4 justify-center'>
                    <button className='bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition'>Get Started</button>
                    <button className='border border-white text-white px-6 py-3 rounded-full hover:text-blue-500 hover:bg-white transition'>Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default HeroUI
// Gradient ผมมันขึ้น ขีดเส้นใต้เหลือง เลยไปใช้ bg ตัวอย่างใน tailwind ลองตรวจดูครับ ว่าผ่านไหม