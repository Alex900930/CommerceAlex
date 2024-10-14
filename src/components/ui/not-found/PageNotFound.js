import { titleFonts } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

function PageNotFound() {
  return (
    
  <div className="flex flex-col md:flex-row h-[800px] w-full justify-center items-center align-middle">
    <div className="text-center px-5 mx-5">
        <h2 className={`${titleFonts.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Ups! Lo sentimos mucho.</p>
        <p className="font-light">
           <span className="">Puedes regresar al </span> 
           <Link href="/" className="font-normal hover:underline transition-all">Inicio</Link>
        </p>
    </div>
   
    <div className="px-5 mx-5">
            <Image className="p-5 sm:p-0" 
            width={550}
            height={550}
            alt="" src= "/imgs/starman_750x750.png" />
    </div>
  </div>
  )
}

export default PageNotFound