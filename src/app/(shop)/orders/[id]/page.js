/* eslint-disable react/prop-types */
import Title from '@/components/ui/title/Title'
import Link from 'next/link'
import React from 'react'
import { products } from '@/seed/seed'
import Image from "next/image"
import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector'
import clsx from 'clsx'
import { IoCardOutline } from 'react-icons/io5'

export default function OrderComp({params}) {

const {id} = params;

const productsInCart = [
  products[0],
  products[1],
  products[2] 
]

  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      
      <div className='flex flex-col w-[1000px]'>

          <Title 
           title={`Orden # ${id}`}       
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
             {/*Carrito*/}
              <div className='flex flex-col mt-5'>
                <div className={
                  clsx(
                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                    {
                      'bg-red-500': false,
                      'bg-green-500': true,
                    }
                  )
                }>
                    <IoCardOutline size={30} />
                    {/* <span className='mx-5'> Pendiente de Pago</span> */}
                    <span className='mx-5'> Pagada</span>
                </div>
              
              
              {/*Items*/}
                {
                  productsInCart.map( prod => (
                    <div key={prod.slug} className='flex mb-5'>
                      <Image 
                        src={`/products/${prod.images[0]}`}
                        width={100}
                        height={100}
                        style={{
                          width: '100px',
                          height: '100px'
                        }}
                        alt={prod.title}
                        className="mr-5 rounded"
                      /> 
                      <div>
                        <p>{prod.title}</p>
                        <p>{prod.price} * 3</p>
                        <p className='font-bold'>Subtotal: {prod.price * 3}</p>
                      </div>                         
                    </div>
                  )

                  )
                }

              </div>

             {/*Checkout - Resumen de Ordenes*/}
                <div className='bg-white rounded-xl shadow-xl p-7'>

                <h2 className='text-2xl mb-2'>Direccion de Entrega</h2>
                <div className='mb-10'>
                  <p>Alex Aherrera</p>
                  <p>Av. Doctor Aramis 123</p>
                  <p>Caninde, Centro</p>
                  <p>Complemento, Casa</p>
                  <p>CEP: 627000-00</p>
                  <p>No. Telef: 85 123 123 123</p>
                </div>

                {/*Linea divisoria*/}

                  <div className='h-0.5 bg-gray-200 w-full mb-10 rounded'>

                  </div>

                  <h2 className='text-2xl mb-2'>Resumen de Orden</h2>
                  <div className='grid grid-cols-2'>
                    
                    <span>No. Productos</span>
                    <span className='text-right'>3 articulos</span>

                    <span>Subtotal</span>
                    <span className='text-right'>$ 100</span>

                    <span>Impuestos (15%)</span>
                    <span className='text-right'>$ 100</span>

                    <span className='mt-5 text-2xl'>Total:</span>
                    <span className='mt-5 text-2xl text-right'>$ 100</span>
                  </div>

                  <div className={
                  clsx(
                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                    {
                      'bg-red-500': false,
                      'bg-green-500': true,
                    }
                  )
                }>
                    <IoCardOutline size={30} />
                    <span className='mx-3'>Pagada</span>
                </div>

                </div>

          </div>
      </div>
    </div>
  )
}
