"use client"
//import useUiStore from "@/store/ui/ui-store";
import {useSidebarStore} from "@/store/ui/ui-store";
import AlexTudo from "/public/imgs/AlexTudo.png"
import { titleFonts } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import {IoSearchOutline, IoCartOutline} from 'react-icons/io5';
import Image from "next/image";


export default function TopMenu() {
  //const openMenu = useUiStore(state => state.openSideMenu());

  const {openSideMenu } = useSidebarStore();

  return (
    <nav className='flex px-5 justify-between items-center w-full'>
        <div >
          <Link href="/" className="flex">
           {/*  <span className={`${titleFonts.className} antialiased font-bold`}>CommerceAlex</span> */}
          
              <Image 
                  src={AlexTudo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className=" object-cover"
              />
           
                   
            
          </Link>
        </div>

        {/*Center Menu*/}
        <div className='hidden sm:block'>
          <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/men">Homens</Link>
          <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/women">Mulheres</Link>
          <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/kid">Crianças</Link>
        </div>

        {/*SEARCH CAR MENU*/}
        <div className='flex items-center'>
          <Link href="/search" className='mx-2'>
            <IoSearchOutline className='w-5 h-5'/>
          </Link>

          <Link href="/cart" className='mx-2'>
            <div className='relative'>
              <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>3</span>
              <IoCartOutline className='w-5 h-5'/>
            </div>  
          </Link>

          <button
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' onClick={openSideMenu} >
              Menu
          </button>
        </div>
    </nav>
  )
}
