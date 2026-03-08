import React from 'react'

function FlexRowLayout() {
    return (
        <section className='min-h-screen bg-gray-100 p-4 flex justify-center items-center'>
            <div className='w-full max-w-[350px] bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-xl md:text-2xl font-bold text-blue-500 text-center mb-6'>Login</h2>

                <div className='mb-4'>
                    <label htmlFor="username"
                        className='block mb-1 text-sm'>ชื่อผู้ใช้</label>
                    <input type="text"
                        placeholder='username'
                        id='username'
                        className='w-full border outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="password"
                        className='block mb-1 text-sm'>รหัสผ่าน</label>
                    <input type="password"
                        placeholder='password'
                        className='p-2 w-full border outline-none focus:ring-2 focus:ring-blue-400 rounded' />
                </div>

                {/* LESSON 5 */}
                <div className='flex justify-between items-center mb-6'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" id='remember'
                            className='w-4 h-4 accent-blue-500' />
                        <label htmlFor="remember"
                            className='text-sm text-gray-600'
                        >Remember me</label>
                    </div>

                    <a href="" className='text-sm text-blue-500 hover:underline'>
                        Forgot password?
                    </a>
                </div>


                <button className='w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition'>
                    Login
                </button>
            </div>
        </section>
    )
}

export default FlexRowLayout