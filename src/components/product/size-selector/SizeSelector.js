/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function SizeSelector({ selectedSize, availableSizes }) {
  return (
    <div className='my-5'>
      <h3 className='font-bold mb-4'>Tallas disponibles</h3>

      <div className='flex'>
        {availableSizes.map(size => (
          <button key={size} 
          className={`mx-2 text-lg ${size === selectedSize ? 'underline' : 'hover:underline'}`}>
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizeSelector
