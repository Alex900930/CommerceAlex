import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

function QuantitySelector({quantity}) {


  return (
    <div className='flex'>
        <button>
            <IoRemoveCircleOutline size={30} />
        </button>

        <span className='bg-gray-200 mx-3 px-5 text-center w-20'>
            3
        </span>

        <button >
            <IoAddCircleOutline size={30}/>
        </button>
    </div>
  )
}

export default QuantitySelector