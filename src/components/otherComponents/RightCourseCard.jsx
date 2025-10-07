import React from 'react'

function RightCourseCard(props) {
    const {title,text,style,link} = props

    const color = {
        "basic":"bg-[#edf2fa] h-[220px] w-[290px] ml-7 mr-10 p-5 flex flex-col justify-between rounded-xl"
    }
  return (
    <div className={`${color[style]} `}>
        <h1 className='text-xl font-bold'>{title}</h1>
        <div className='flex justify-between'>
            <p className='text-blue-700 font-semibold mt-18'>{text}</p>
            <img src={link} className='h-30' />
        </div>
    </div>
  )
}

export default RightCourseCard
