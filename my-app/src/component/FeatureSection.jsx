import React from 'react'
import { Zap, Shield, Cloud } from "lucide-react";

function FeatureSection() {
    return (
        <section className='bg-white py-16'>
            <div className='max-w-6xl mx-auto px-4'>

                {/* LESSON: Section Title + Subtitle */}
                <div className='text-center mb-10'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2'>Our Features</h2>
                    <p className='text-gray-400 text-sm max-w-xl mx-auto'>Discover what makes our platform amazing</p>
                </div>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>

                    {/* card 1 */}
                    <div className='group text-center p-6 border  rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 transform'>
                        <div className='w-16 h-16 bg-blue-100 text-blue-500 rounded-full text-2xl mb-4 flex justify-center items-center mx-auto
                        group-hover:bg-blue-500 group-hover:text-white transition'>
                            <Zap className='w-8 h-8' />
                        </div>
                        <h3 className='text-lg font-bold mb-2 group-hover:text-blue-500'>
                            Fast Performance
                        </h3>
                        <p className='text-sm text-gray-500'>
                            Our platform runs at lightning speed
                        </p>
                    </div>

                    {/* card 2 */}
                    <div className='group text-center p-6 border  rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 transform'>
                        <div className='w-16 h-16 text-2xl mb-4 bg-blue-100 rounded-full flex justify-center items-center mx-auto
                        group-hover:text-white group-hover:bg-blue-500 transition'>
                            <Shield className='w-8 h-8' />
                        </div>
                        <h3 className='text-lg font-bold mb-2'>
                            Secure System
                        </h3>
                        <p className='text-sm text-gray-500'>
                            Keep your data safe and protected
                        </p>
                    </div>


                    {/* card 3 */}
                    <div className='group text-center p-6 border  rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 transform'>
                        <div className='w-16 h-16 bg-blue-100 text-2xl rounded-full flex justify-center items-center mx-auto mb-4
                        group-hover:text-white group-hover:bg-blue-500 transition'>
                            <Cloud className='w-8 h-8' />
                        </div>
                        <h3 className='text-lg font-bold mb-2'>
                            Cloud Based
                        </h3>
                        <p className='text-sm text-gray-500'>
                            Access from anywhere anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
// ทำไมเราต้อง group ด้วยครับ พอไม่ group ก็ไม่ hover ด้วย เราจะใส่มันตอนไหนครับ