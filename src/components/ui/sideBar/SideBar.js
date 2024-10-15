/* eslint-disable react/react-in-jsx-scope */
'use client'
// eslint-disable-next-line no-unused-vars
//import clsx from "clsx";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline, IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline, IoShirtOutline,
  IoTicketOutline
} from "react-icons/io5";
import Link from "next/link";
import useSidebarStore from "@/store/ui/ui-store";


export default function SideBar() {
  
  const { isOpen, closeSideMenu } = useSidebarStore();

  return (
    <div>
      {/*Black Background*/}
      <div className={` ${isOpen ? "fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" : ""}`}>
      </div>

      {/*Blur*/}
      <div className={` ${isOpen ? "fade-in fixed top0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" : ""}`}>
      </div>


      {/*SideMenu*/}
      <nav className={`fixed p-5 right-0 top-0 w-3/4 md:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-transform duration-300 ${isOpen ? '' : 'translate-x-full'}`}>
      <IoCloseOutline
        size={30}
        className ="absolute top-5 right-5 cursor-pointer"
        onClick={closeSideMenu}
      />
        {/*Input de Busqueda*/}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2"/>
          <input type="text" placeholder="Buscar" className="w-full bg-gray-50
          rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-2 focus:border-blue-500"/>
        </div>

        {/*Menu*/}
        <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all ">
            <IoPersonOutline size={25} />
            <span className="ml-3 text-xl">Perfil</span>
        </Link>
        <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all ">
          <IoTicketOutline size={25} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all ">
          <IoLogInOutline size={25} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>
        <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all ">
          <IoLogOutOutline size={25} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>

        {/*Line Separador*/}
        <div className="w-full h-px bg-gray-200 mt-2">
        </div>

        <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all ">
          <IoShirtOutline size={25} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>
        <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all ">
          <IoTicketOutline size={25} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>
        <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all ">
          <IoPeopleOutline size={25} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>

      </nav>


    </div>
  )
}
