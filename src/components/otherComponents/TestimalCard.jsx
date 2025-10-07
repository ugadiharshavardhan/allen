import React from 'react'

function TestimalCard(props) {
    const {text,link,name,rank,quote} = props
  return (
    <div className='h-[300px] w-[300px] bg-[#dceff5] m-2 rounded-xl p-3 flex flex-col justify-between'>
        <img src={quote} className='relative bottom-7 left-5 h-10 w-10' />
      <p className='text-md'>{text}</p>
      <div className='flex '>
        <img src={link} className='h-15 rounded-3xl mr-2' />
        <div>
            <p className='text-lg font-semibold'>{name}</p>
            <p>{rank}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimalCard
