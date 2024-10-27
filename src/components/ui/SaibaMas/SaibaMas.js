/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image'
import { products } from '@/seed/seed';
import { useMainStore } from '@/store/ui/ui-store';

export default function SaibaMas() {

    const { openMainMenu } = useMainStore();

 const productsLanding = [
    products[0].images[0],
    products[1].images[0],
    products[2].images[0],
    products[3].images[0]
 ]

  return (
    <div className='mt-10 mb-10 bg-[#5271ff] grid grid-cols-3 w-full h-[30rem] sm:h-96 sm:w-[90%] mx-auto rounded-md'>
            <div className='col-span-3 sm:col-span-1 p-5 mx-5 sm:m-0'>
               <h1 className='text-white text-xl font-bold'>Vestuário</h1>
               <p className='text-white text-sm mt-4'>As melhores peças, tudo em só um canto</p>
               <button onClick={openMainMenu} className='bg-white rounded-md p-3 mt-5 font-semibold text-[#5271ff]'>Saiba Mais</button>
            </div>
            <div className='col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 flex justify-between items-center p-5'>
                   <div className='transform transition duration-500 hover:scale-x-50  
                   flex flex-col bg-white rounded-md p-3 h-fit sm:h-full mx-3  my-3 
                   sm:my-0 justify-between  items-center'>
                      <Image className='mb-3' src={`/products/${productsLanding[0]}`} alt='imagen1' width={200} height={200}/>
                      <p className='text-sm text-gray-500 mb-1'>Ropa 1</p>
                      <div className=''>
                         <h1 className='font-bold text-green-500 text-xl'>R$ 60</h1>
                         <h5 className='text-gray-300 line-through text-sm'>R$ 100</h5>
                         <p className='text-gray-500 text-sm'>ou 12X de R$ 6,07</p>
                      </div>
                   </div>
                   <div className='transform transition duration-500 hover:scale-x-50 flex flex-col bg-white rounded-md p-3 h-fit sm:h-full mx-3  my-3 
                   sm:my-0 justify-between items-center '>
                      <Image className='' src={`/products/${productsLanding[1]}`} alt='imagen1' width={200} height={200}/>
                      <p className='text-sm text-gray-500 mb-2'>Ropa 2</p>
                      <div>
                         <h1 className='font-bold text-green-500 text-xl'>R$ 60</h1>
                         <p className='text-gray-500 text-sm'>ou 12X de R$ 6,07</p>
                      </div>
                   </div>
                   <div className='transform transition duration-500 hover:scale-x-50  hidden sm:flex flex-col bg-white rounded-md p-3 h-full mx-3 my-3 sm:my-0 justify-between  items-center'>
                      <Image className='mb-3' src={`/products/${productsLanding[2]}`} alt='imagen1' width={200} height={200}/>
                      <p className='text-sm text-gray-500 mb-1'>Ropa 3</p>
                      <div className=''>
                         <h1 className='font-bold text-green-500 text-xl'>R$ 60</h1>
                         <h5 className='text-gray-300 line-through text-sm'>R$ 100</h5>
                         <p className='text-gray-500 text-sm'>ou 12X de R$ 6,07</p>
                      </div>
                   </div>
                   <div className='transform transition duration-500 hover:scale-x-50 hidden sm:flex flex-col bg-white rounded-md p-3 h-fit sm:h-full mx-3 my-3 sm:my-0 justify-between  items-center'>
                      <Image className='' src={`/products/${productsLanding[3]}`} alt='imagen1' width={200} height={200}/>
                      <p className='text-sm text-gray-500 mb-2'>Ropa 4</p>
                      <div>
                         <h1 className='font-bold text-green-500 text-xl'>R$ 60</h1>
                         <p className='text-gray-500 text-sm'>ou 12X de R$ 6,07</p>
                      </div>
                   </div>
            </div>
    </div>
  )
}
