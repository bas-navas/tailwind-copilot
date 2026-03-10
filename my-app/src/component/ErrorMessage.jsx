import React, { useState } from 'react'

function ErrorMessage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setusernameError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)


    const handleLogin = () => {
        const isUsernameEmpty = username.trim() === ''
        const isPasswordEmpty = password.trim() === ''

        setusernameError(isUsernameEmpty)
        setpasswordError(isPasswordEmpty)

        if (isUsernameEmpty || isPasswordEmpty) return

        console.log(username, password)
    }

    return (
        <section className='min-h-screen bg-gray-100 p-4 flex justify-center items-center'>
            <div className='w-full max-w-[350px] bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-xl md:text-2xl font-bold text-blue-500 text-center mb-6'>Login</h2>

                <div className='mb-4'>
                    <label htmlFor="username"
                        className='block mb-1 text-sm'>ชื่อผู้ใช้</label>
                    <input type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            setusernameError(false)
                        }}
                        placeholder='username'
                        id='username'
                        className={`w-full ${usernameError ? "border-red-500" : "border"} border outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded`}
                    />
                    {usernameError && (<p className='text-sm text-red-500 mt-1'>
                        Username is required
                    </p>)}
                </div>
                <div className='mb-6'>
                    <label htmlFor="password"
                        className='block mb-1 text-sm'>รหัสผ่าน</label>
                    <input type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setpasswordError(false)
                        }}
                        id='password'
                        placeholder='password'
                        className='p-2 w-full border outline-none focus:ring-2 focus:ring-blue-400 rounded' />
                    {passwordError && (<p className='text-red-500 text-sm mt-1'>Password is required</p>)}
                </div>

                {/* LESSON 5 */}
                <div className='flex justify-between items-center mb-6'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" id='remember'
                            className='w-4 h-4 accent-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <label htmlFor="remember"
                            className='text-sm text-gray-600'
                        >Remember me</label>
                    </div>

                    <a href="" onClick={(e) => e.preventDefault()} className='text-sm text-blue-500 hover:underline hover:text-blue-700 transition'>
                        Forgot password?
                    </a>
                </div>

                <button onClick={handleLogin}
                    // disabled={username.trim() === '' || password.trim() === ''}
                    className={`w-full p-2 ${username.trim() === '' || password.trim() === '' ?
                        'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 cursor-pointer'} 
                     text-white rounded  transition`}>
                    Login
                </button>
            </div>
        </section>
    )
}

export default ErrorMessage
// ส่งแบบฝึกหัด