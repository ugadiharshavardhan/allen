import React from 'react'
import AnchorElement from '../otherComponents/AnchorElement'
import ImgElement from '../otherComponents/ImgElement'
import Button from '../otherComponents/Button'

function NavBar() {
  return (
    <div className='fixed right-0 left-0 w-full z-50'>
        <div className='min-h-[20px] w-full bg-white flex p-2'>
        <ImgElement link={'https://res.cloudinary.com/dcttatiuj/image/upload/v1758356635/Screenshot_2025-09-20_135238_lrjwvp.png'} />
        <div className='flex'>
            <div className='flex justify-center items-center ml-30'>
                <AnchorElement text={"Courses"} />
                <AnchorElement text={"Test Series"} />
                <AnchorElement text={"Classroom"} />
                <AnchorElement text={"Results"} />
                <AnchorElement text={"Study Materials"} />
                <AnchorElement text={"Scholarships"} extrabtn={'NEW'} />
                <AnchorElement text={"ALLEN E-Store"} />
                <AnchorElement text={"More"} />
            </div>
            <div className='flex justify-center items-center ml-20'>
                <img src='https://cdn-icons-png.flaticon.com/512/3687/3687004.png' className='h-8' />
                <Button text={'Login'} style='empty' />
            </div>
        </div>
        </div>
        <div className='flex bg-blue-500 h-10 p-2 justify-center' >
            <img src='https://media.istockphoto.com/id/996179604/vector/vector-red-megaphone.jpg?s=612x612&w=0&k=20&c=HqYIdJYN9NujFnQtmVwojOCTsO81GfOq0s-b4Ye0l4w=' className='h-8 rounded-xl mr-5 pb-1' />
            <p className='text-yellow-300 text-md font-bold'>INDIA'S BIGGEST EXAM IS LIVE ✨<span className='text-white'>If your child is in Class 5–10, register for TALLENTEX now{' >'}</span></p>
        </div>
    </div>
  )
}

export default NavBar
