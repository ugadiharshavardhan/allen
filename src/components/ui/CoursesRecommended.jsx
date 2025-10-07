import React from 'react'
import RecommendedCard from '../otherComponents/RecommendedCard'
import Button from '../otherComponents/Button'


function CoursesRecommended() {

  return (
    <div className='bg-[#dfe3eb] text-center pb-10  w-full'>
        <div className='flex justify-center'>
            <hr className='mt-5 text-center w-[650px]' />
        </div>
        <div className='flex p-2 justify-center items-center'>
            <RecommendedCard tag="SCHOLARSHIP ELIGIBLE" extra={"md"} content={"RECORDED"} icon={"https://i.pinimg.com/474x/64/02/78/640278db71e9352a30fc8f14b93e9f44.jpg"} title={"JEE Enthusiast"} target={"Target 2026"} amount={"14,400"} text1={"Latest Recordings Full Syllabus"} text2={"Digital Study Materials"} text3={"32(part+full) syllabus test"} />
            <RecommendedCard tag="UPTO 90% SCHOLARSHIP" extra={"sm"} content={"LIVE"} icon={"https://www.shutterstock.com/shutterstock/photos/1707930625/display_1500/stock-vector-video-icon-logo-vector-illustration-video-player-icon-design-vector-template-trendy-video-vector-1707930625.jpg"} title={"JEE Leader Online Course"} target={"Target 2026"} amount={"89,000"} text1={"Live classes from Allen KOTA'S top faculty"} text2={"Upto 35 online tests"} text3={"24/7 doubt support"} />
        </div>
        <Button text={"View All Courses"} styles={"blue"} />
    </div>
  )
}

export default CoursesRecommended
