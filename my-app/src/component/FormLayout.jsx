import React from 'react'

function FormLayout() {
    return (
        <section className='min-h-screen flex justify-center items-center  bg-gray-100 p-4'>
            <div className='w-full max-w-[350px] p-6 bg-white rounded-lg shadow-lg'>
                <h2 className='text-xl md:text-2xl font-bold text-center text-blue-500 mb-6'>
                    Login
                </h2>
                <div className='mb-4'>
                    <label className='inline-block text-sm mb-1'>ชื่อผู้ใช้</label>
                    <input type="text"
                        placeholder='Username'
                        className='w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <div className='mb-6'>
                    <label className='text-sm mb-1'>รหัสผ่าน</label>
                    <input type='password'
                        placeholder='Password'
                        className='w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <button className='w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition'>
                    Login
                </button>
            </div>
        </section>
    )
}

export default FormLayout