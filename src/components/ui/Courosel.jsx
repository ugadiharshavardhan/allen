import React from 'react'
import EachCouroselItem from '../otherComponents/EachCouroselItem'

function Courosel() {
  return (
    <div className='w-full bg-[#f7f9ff] pb-30'>
      <EachCouroselItem 
        size="lg"
        imgLink={"https://res.cloudinary.com/dcttatiuj/image/upload/v1758348740/Screenshot_2025-09-20_113947_jmfa76.png https://res.cloudinary.com/dcttatiuj/image/upload/v1758429823/Screenshot_2025-09-21_101300_nswyfa.png https://res.cloudinary.com/dcttatiuj/image/upload/v1758429868/Screenshot_2025-09-21_101410_wwglrd.png https://res.cloudinary.com/dcttatiuj/image/upload/v1758429878/Screenshot_2025-09-21_101427_mm0ztg.png"} 
      />
    </div>
  )
}

export default Courosel


