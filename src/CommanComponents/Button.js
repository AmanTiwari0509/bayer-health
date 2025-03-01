import React from 'react'

const Button = ({name,handleSubmit}) => {
  return (
    <div>
        <button  className='button' onClick={handleSubmit}>{name}</button>
    </div>
  )
}

export default Button