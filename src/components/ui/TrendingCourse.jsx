import React from 'react'
import Button from '../otherComponents/Button'

function TrendingCourse() {
  return (
    <div className='bg-[#f7f9ff] p-2  w-full'>
      <div className=' ml-50 mt-7 mb-5'>
        <h1 className='font-bold text-2xl mb-5'>Trending Courses</h1>
        <Button text={'NEET'} style='emptyblack' />
        <Button text={'JEE'} style='emptyblack' />
        <Button text={'Class 6-10'} style='emptyblack' />
      </div>
    </div>
  )
}

export default TrendingCourse
