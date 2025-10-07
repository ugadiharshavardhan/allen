import React from 'react'
import IconText from './IconText'

function RecommendedCard(props) {
    const {title,target,text1,text2,text3,amount,icon,content,extra,tag} = props
  return (
    <div className='h-[315px] w-[315px] bg-white m-5 rounded-xl p-4 flex flex-col justify-between'>
      <IconText tag={tag} extra={extra} icon={icon} text={content} /> 
      <div className='flex flex-col items-start'>
        <h1 className='font-bold text-xl pl-1'>{title}</h1>
        <p className='text-gray-400 pl-1'>{target}</p>
        <p className='m-2'>✓ <span>{text1}</span></p>
        <p className='m-4'>✓ <span>{text2}</span></p>
        <p className='m-4'>✓ <span>{text3}</span></p>
      </div>
      <div className='flex justify-between'>
        <p><span className='font-semibold text-md'>{amount}</span> + Taxes applicable</p>
        <p className='text-blue-700 font-semibold text-md'>{"Know more >"}</p>
      </div>
    </div>
  )
}

export default RecommendedCard
