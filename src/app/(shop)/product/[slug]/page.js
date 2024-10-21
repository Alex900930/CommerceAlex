"use client"
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { products } from "@/seed/seed";
import NotFound from "../not_found";
import { titleFonts } from "@/config/fonts";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import ProductSlideShow from "@/components/product/slideshow/ProductSlideShow";
import ProductMobileSlideShow from "@/components/product/slideshow/ProductMobileSlideShow";
import Link from "next/link";

function Prod({params}) {
  const {slug} = params;
 const product = products.find(prod => prod.slug === slug)
 
 if(!product){
  <NotFound />
 }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

      {/*SlideShow*/}
      <div className="col-span-1 md:col-span-2">

        {/*Mobile Sile*/}
       <ProductMobileSlideShow 
          title={product.title}
          images={product.images}
          className="block md:hidden"
        /> 

        {/*Desktop Slide*/}
         <ProductSlideShow  
         title={product.title}
         images={product.images}
         className="hidden md:block"
        /> 
      </div>


      {/*Detalles*/}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFonts.className} antialiased font-bold text-xl`}>
        
          {product.title}
        
        </h1>
        <p className="text-lg mb-5">
          {`${product.price}`}
        </p>

        {/*Selector de tallas*/}
         <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />


        {/*Selector de Cantidad*/}
        <QuantitySelector quantity={product.inStock}/>

        {/*Button*/}
        <button className="btn-primary my-5">
          <Link href="/cart">
            Agregar al Carrito
          </Link>
          
        </button>

        {/*Descripcion*/}

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}  
        </p>
        
      </div>
    </div>
  )
}

export default Prod