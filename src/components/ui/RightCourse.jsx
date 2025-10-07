import React from 'react'
import RightCourseCard from '../otherComponents/RightCourseCard'

function RightCourse() {
  return (
    <div className='mb-10  w-full'>
        <div className='ml-50'>
            <h1 className='text-4xl font-bold mt-7'>Pick Right Course for you</h1>
        </div>
        <div className='flex justify-center items-center mt-7'>
            <RightCourseCard title={"NEET Courses"} text={"View Courses >"} style={"basic"} link={"https://res.cloudinary.com/dcttatiuj/image/upload/v1758350361/Screenshot_2025-09-20_120842_kwxhtf.png"} />
            <RightCourseCard title={"JEE Courses"} text={"View Courses >"} style={"basic"} link={"https://res.cloudinary.com/dcttatiuj/image/upload/v1758350502/Screenshot_2025-09-20_121131_bue7m5.png"} />
            <RightCourseCard title={"Courses for class 6-10"} text={"View Courses >"} style={"basic"} link={"https://res.cloudinary.com/dcttatiuj/image/upload/v1758350559/Screenshot_2025-09-20_121231_k1szao.png"} />
        </div>
    </div>
  )
}

export default RightCourse
