"use client"
import { titleFonts } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import {useSidebarStore} from "@/store/ui/ui-store"
import { IoCloseOutline } from 'react-icons/io5'

export default function MenuMain() {

  const { isOpen, closeSideMenu } = useSidebarStore();
  const { openSideMenu } = useSidebarStore();
  const {openMainMenu} = useSidebarStore();

  const handleMain = () => {
    console.log("LLegue al click close tenia esto1, y openMain esto2", closeSideMenu,openMainMenu )
    closeSideMenu
    openMainMenu
  }
  
  return (
    <>
      {/*Barra Superior*/}
      {

        isOpen && (
          <div className='bg-white flex justify-center h-64 w-full z-50 fixed top-0' >
          <IoCloseOutline
            size={30}
            className ="absolute top-5 left-10 mb-2 cursor-pointer"
            onClick={closeSideMenu}
          />
          <div className='flex flex-col mb-1'>
          <div 
            className={`${titleFonts.className} antialiased hover:underline cursor-pointer rounded mt-14 transition-colors duration-300 ease-in-out`}
            onClick={handleMain}
          >
               Loja (50% descontos)
          </div>
          <div 
            className={`${titleFonts.className} antialiased hover:underline cursor-pointer rounded mt-14 transition-colors duration-300 ease-in-out`}
            onClick={closeSideMenu}
          >
            Nosso Foco
          </div>
          <div 
            className={`${titleFonts.className} antialiased hover:underline cursor-pointer rounded mt-14 transition-colors duration-300 ease-in-out`}
            onClick={closeSideMenu}
          >
            Nossos Servicios
          </div>
          </div>
          
        </div>
        )

      }
     


      {/*Black Background*/}
      <div className={` ${isOpen ? "fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" : ""}`}>
      </div>

      {/*Blur*/}
      <div className={` ${isOpen ? "fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" : ""}`}>
      </div>

      <div className={`flex justify-between z-10 transition-all duration-500 ${isOpen ? "text-black bg-white h-14" : 'text-white bg-gray-800 h-14'}`}>
        {/*Logo*/}
        <div className={`${titleFonts.className} antialiased font-bold p-1 ml-2 mt-2 cursor-pointer`}>CommerceAlex</div>
        
        {/*Navegacion Central*/}
        <div 
          className={`${titleFonts.className} antialiased hover cursor-pointer rounded p-1 mr-2 mt-2  transition-colors duration-300 ease-in-out`}
          onMouseEnter={openSideMenu} 
        >
          Loja (50% descontos)
        </div>
      </div>

      
    </>
  )
}
