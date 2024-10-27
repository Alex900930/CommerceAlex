import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useMainStore } from "@/store/ui/ui-store";

export default function NavMain() {

  const { closeMainMenu, openMainMenu } = useMainStore();

  return (
    <div className=' hidden sm:flex gap-20 justify-center m-2 p-2'>
        <div 
        onClick={closeMainMenu}
        className='flex items-center gap-2 hover:bg-slate-200 rounded-full p-2'>
          <RxHamburgerMenu />  
          {/* first hover effect */}
            <p className="relative group">
              <span>Inicio</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full group-hover:cursor-pointer"></span>
            </p>
          
        </div>
        <div 
        onClick={openMainMenu}
        className='hover:bg-slate-200 rounded-full p-2 cursor-pointer'>
          {/* first hover effect */}
          <p className="relative group">
              <span>Coleçoes</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full group-hover:cursor-pointer"></span>
          </p>
          
        </div>
        <div className='hover:bg-slate-200 rounded-full p-2 cursor-pointer'>
        {/* first hover effect */}
        <p className="relative group">
              <span>Contato</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full group-hover:cursor-pointer"></span>
         </p>
          
        
        </div>
    </div>
    
    
  )
}
