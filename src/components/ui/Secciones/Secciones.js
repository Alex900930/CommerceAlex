import Image from 'next/image'
import React from 'react';
import cocina from "../../../../public/imgs/Secciones/cocina.png"
import tecnologia from "../../../../public/imgs/Secciones/tecnologia.png"
import transporte from "../../../../public/imgs/Secciones/transporte.png"
import Vestuario from "../../../../public/imgs/Vestuario.png";
import { useMainStore } from "@/store/ui/ui-store";
import './stylehover.css'


export default function Secciones() {

   const {openMainMenu } = useMainStore();

  return (
    <div className=' hidden sm:flex gap-20 justify-center m-16 p-2'>
       <div 
       onClick={openMainMenu}
       className='
        transform transition duration-500 hover:scale-125
        flex flex-col w-36 h-36 items-center gap-2 rounded-full cursor-pointer p-2'>
           <Image 
           src={Vestuario} 
           alt='imagen cocina'
           className='rounded-md'
           />
           Vestuário

        </div>
        <div className='
        transform transition duration-500 hover:scale-125
        flex flex-col w-36 h-36 items-center gap-2 rounded-full cursor-pointer p-2'>
           <Image 
           src={cocina} 
           alt='imagen cocina'
           className='rounded-md'
           />
           Cozinha

        </div>
        <div className='
        transform transition duration-500 hover:scale-125
        flex flex-col w-36 h-36 items-center gap-2  rounded-full cursor-pointer p-2'>
           <Image 
           src={tecnologia} 
           alt='imagen cocina'
           className='rounded-md '
           />
           Eletrônicos
        </div>
        <div className='
        transform transition duration-500 hover:scale-125
        flex flex-col w-36 h-36 items-center gap-2  rounded-full cursor-pointer p-2'>
           <Image 
           src={transporte} 
           alt='imagen cocina'
           className='rounded-md '
           />
           Carro e Moto
        </div>
    </div>
    
    
  )
}
