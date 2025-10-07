import React from 'react'
import EachCouroselItem from '../otherComponents/EachCouroselItem'
function OurChampions() {
  return (
    <div className='bg-white flex flex-col justify-center items-center '>
      <h1 className='text-xl font-bold mt-5'>Meet Our 2024 Champions</h1>
      <EachCouroselItem 
          size="xs"
          imgLink={"https://res.cloudinary.com/dcttatiuj/image/upload/v1758431243/Screenshot_2025-09-21_103711_yf3kgj.png https://res.cloudinary.com/dcttatiuj/image/upload/v1758431208/Screenshot_2025-09-21_103634_ty81av.png"} 
        />
    </div>
  )
}

export default OurChampions
