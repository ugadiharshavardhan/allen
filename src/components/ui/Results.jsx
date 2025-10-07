import React from 'react'

function Results() {
  return (
    <div className='min-h-screen/2 bg-[#f7f9ff] pr-20 pl-20 pb-6 '>
        <div className="bg-[url('https://res.cloudinary.com/dcttatiuj/image/upload/v1758361488/Screenshot_2025-09-20_151440_xmor5c.png')] h-[150px] bg-cover rounded-lg p-10">
         <div className='flex justify-around'>
            <p  className='text-4xl font-semibold '>Proven Results<br/> in 2024</p>
            <div className='flex'>
                <div className='flex flex-col'>
                    <span className='text-blue-500 text-3xl font-bold'>450+</span>
                    <p className='text-xl font-semibold'>Got in Govt. Medical Colleges</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <span className='text-blue-500 text-3xl font-bold'>600+</span>
                <p className='text-xl font-semibold'>Got into top IITs</p>
            </div>

         </div>
        </div>
    </div>
  )
}

export default Results
