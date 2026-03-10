import React from 'react'

function CardList() {
    const sets = ([
        { id: 1, name: "Dental Basic Set", unit: "Mobile Unit 01", status: "พร้อมใช้" },
        { id: 2, name: "Extraction Set", unit: "Mobile Unit 02", status: "กำลังทำความสะอาด" },
        { id: 3, name: "Ortho Kit", unit: "Clinic", status: "รอบนึ่ง" },
        { id: 4, name: "Basic Kit", unit: "Mobile Unit 03", status: "พร้อมใช้" }
    ])

    return (
        <section className='min-h-screen bg-gray-100 p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {sets.map((item, index) => (
                    <div key={item.id}
                        className='bg-white p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition'>
                        <div className='flex justify-between items-center mb-2'>
                            <h3 className='text-lg font-bold'>{item.name}</h3>
                            <span className={`px-2 py-1 text-xs rounded
                                 ${item.status === 'พร้อมใช้' ? "bg-green-100 text-green-700" :
                                    item.status === 'กำลังทำความสะอาด' ? "bg-yellow-100 text-yellow-700" :
                                        item.status === 'รอบนึ่ง' ? "bg-blue-100 text-blue-700" : ""}`}>{item.status}</span>
                        </div>
                        <p className='text-gray-500'>{item.unit}</p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default CardList
