import React from 'react'

function ImgElement(props) {
    const {link} = props
  return (
    <div>
      <img src={link} className='h-7 w-26 mt-1 bg-red-500' />
    </div>
  )
}

export default ImgElement
