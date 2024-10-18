"use client"

import React, { useState, useEffect } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

function QuantitySelector({ quantity }) {
  const [count, setCount] = useState(quantity)

  useEffect(() => {
    setCount(quantity)
  }, [quantity])

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1)
    }
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className='flex'>
      <button onClick={handleDecrement}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className='bg-gray-200 mx-3 p-2 text-center w-20'>
        {count}
      </span>

      <button onClick={handleIncrement}>
        <IoAddCircleOutline size={30}/>
      </button>
    </div>
  )
}

export default QuantitySelector
