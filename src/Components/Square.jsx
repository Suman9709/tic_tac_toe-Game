import React from 'react'

const Square = (props) => {
    
  return (
    <div onClick={props.onClick}
     className='border-[1px]  border-black h-16 w-16 flex items-center justify-center bg-yellow-400'>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
