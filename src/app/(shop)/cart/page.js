import Title from '@/components/ui/title/Title'
import Link from 'next/link'
import React from 'react'
import { products } from '@/seed/seed'
import Image from "next/image"
import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector'
import { redirect } from 'next/navigation'

export default function CartComponent() {

const productsInCart = [
  products[0],
  products[1],
  products[2] 
]

/* redirect('/empty') */

  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      
      <div className='flex flex-col w-[1000px]'>

          <Title 
           title="Carrito"       
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
             {/*Carrito*/}
              <div className='flex flex-col mt-5'>
                <span className='text-xl'> Agregar mas items</span>
                <Link href="/" className='underline mb-5 hover:text-blue-600'>
                  Continua comprando
              </Link>
              
              
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
                        <p>{prod.price}</p>
                        <QuantitySelector quantity={3} />
                      </div>                         
                      <button className='underline mt-3'>Remover</button>
                    </div>
                  )

                  )
                }

              </div>

             {/*Checkout - Resumen de Ordenes*/}
                <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
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
                  <div className='mt-5 mb-2 w-full'>
                    <Link href="/checkout/address"
                    className='flex btn-primary justify-center'
                    >
                      Checkout
                    </Link>
                  </div>
                </div>

          </div>
      </div>
    </div>
  )
}
