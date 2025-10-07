import React from 'react'

function Button(props) {
    const {text,styles} = props

    const styllings = {
        'empty':'border-2 text-blue-500 p-1 w-20 rounded-xl',
        "blue":"bg-blue-700 p-2 rounded-2xl font-semibold w-35 text-white",
        "emptyblack":"border-2 p-1 w-30 rounded-xl"
    }
  return (
    <button className={`${styllings[styles]} ml-5`} >{text}</button>
  )
}

export default Button
