import React from 'react'

function AnchorElement(props) {
    const {text,extrabtn} = props

    const upperbtn = {
        "NEW":"bg-orange-500 text-white font-bold rounded-xl text-sm p-1"
    }
  return (
    <div className='mr-2'>
      <a className='mr-10'>{text} <span className={`${upperbtn[extrabtn]} fixed top-1`}>{extrabtn}</span> </a>
    </div>
  )
}

export default AnchorElement
