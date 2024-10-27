"use client"
//import useUiStore from "@/store/ui/ui-store";
import { useSidebarStore, useMainStore } from "@/store/ui/ui-store";
import AlexTudo from "/public/imgs/AlexTudo.png";
import { titleFonts } from "@/config/fonts";
import Link from "next/link";
import React from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { GiTruck } from "react-icons/gi";
import Image from "next/image";

export default function TopMenuMain() {
  const { openSideMenu } = useSidebarStore();
  const { closeMainMenu } = useMainStore();

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/" className="flex">
          <Image
            src={AlexTudo}
            alt="Logo"
            width={100}
            height={100}
            className="object-cover mt-1 transform transition duration-500 hover:scale-125"
            onClick={closeMainMenu}
          />
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden w-[60%] sm:block">
        <div className="relative h-10">
          <input
            type="text"
            placeholder="O que está buscando"
            className="absolute bg-gray-200 h-full w-full rounded-full p-2"
          />
          <div className="absolute flex justify-center items-center cursor-pointer bg-gray-700 h-full rounded-full right-0 w-16">
            <IoSearchOutline size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Rastrear Pedido */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2 flex gap-2 items-center">
          <GiTruck className="w-8 h-8 transform transition duration-500 hover:scale-125" />
          <div className="relative group">
            <span className="p-2 hover:bg-slate-200 rounded-full cursor-pointer">
              Rastrear Pedido
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
          </div>
        </Link>

        <div className="h-5 w-[1px] bg-black mx-2"></div>

        <Link href="/cart" className="mx-2">
          <div className="relative transform transition duration-500 hover:scale-125">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">0</span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 hover:bg-slate-200 rounded-full cursor-pointer"
          onClick={openSideMenu}
        >
          <div className="relative group">
            <span>Menu</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
