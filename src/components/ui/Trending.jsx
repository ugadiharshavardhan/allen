import React from 'react'
import EachCouroselItem from '../otherComponents/EachCouroselItem'

function Trending() {
  return (

    <div className='bg-[#f7f9ff] flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-semibold mt-5'>What's Trending</h1>
          <EachCouroselItem 
            size="xs"
            imgLink={"https://res.cloudinary.com/dcttatiuj/image/upload/v1758430891/Screenshot_2025-09-21_103056_h41opv.png https://res.cloudinary.com/dcttatiuj/image/upload/v1758430845/Screenshot_2025-09-21_103029_uxadeg.png https://res.cloudinary.com/dcttatiuj/image/upload/v1758430508/Screenshot_2025-09-21_102457_k1otyu.png https://res.cloudinary.com/dcttatiuj/image/upload/v1758430003/Screenshot_2025-09-21_101635_h8ykpp.png"} 
          />
    </div>
  )
}

export default Trending
