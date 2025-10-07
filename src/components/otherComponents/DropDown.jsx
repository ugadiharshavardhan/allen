import React from 'react'

function DropDown({text,label}) {
    
  return (
    <div className='flex flex-col m-2'>
      <label className='mt-2 mb-2'>{label}<span className='text-red-500'>*</span></label>
      <select className='bg-white w-[280px] rounded-lg p-2 hover:border-black bg-white p-1 rounded-lg border-2 border-gray-300'>
        {text.map((each,index)=>(
            <option key={index} className='rounded-lg border-2 border-gray-300' >{each}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
