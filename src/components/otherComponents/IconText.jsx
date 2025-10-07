import React from 'react'

function IconText(props) {
  const {icon,text,extra,tag} = props

  const other = {
    "sm":"w-[90px]",
    "md":"w-[120px]"
  }
  return (
    <div className='flex justify-between'>
      <div className={`flex justify-around bg-black rounded-xl p-1 ${other[extra]}`}>
        <img src={icon} className='h-6 rounded-lg' />
        <p className='text-white font-bold'>{text}</p>
      </div>
      <div className=' relative top-1 left-7'>
        <p className='bg-orange-500 text-white font-semibold rounded-l-xl p-1 text-xs'>{tag}</p>
      </div>
    </div>
    
  )
}

export default IconText
