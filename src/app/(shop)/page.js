/* eslint-disable react/react-in-jsx-scope */
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { products } from "../../seed/seed";

export default function Home() {
  
  return (
    <>
       <Title 
       title="Tienda"
       subtitle="Todos los productos"
       className="mb-2"
       />
       <ProductGrid products={products} />
    </>
  );
}