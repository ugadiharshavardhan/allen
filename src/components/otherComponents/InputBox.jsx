import React from 'react'

function InputBox({text,placeholder}) {
  return (
    <div className='flex flex-col m-2'>
      <label className='mt-2 mb-2'>Student's full name{text}<span className='text-red-500'>*</span></label>
      <input type='text' placeholder={placeholder} className='hover:border-black bg-white p-1 rounded-lg border-2 border-gray-300' />
    </div>
  )
}

export default InputBox
