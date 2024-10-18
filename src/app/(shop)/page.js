/* eslint-disable react/react-in-jsx-scope */
import ProductGrid from "@/app/(shop)/products/product-grid/ProductGrid"
import Title from "@/components/ui/title/Title";
import { products } from "../../seed/seed";

export default function Home() {
  
  return (
    <>
       <Title 
       title="Loja"
       subtitle="Todos os produtos."
       className="mb-2"
       />
       <ProductGrid products={products} />
    </>
  );
}
