/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import NotFound from '../not_found';
import { products } from "../../../../seed/seed";
import Title from "@/components/ui/title/Title";

export default function Cat({ params }) {
  const { id } = params;
  const productsArr = products.filter(prod => prod.gender === id)
 
  /* if (id === 'kids') {
    return;
  } */
 
  return (
    <>
    {
        id === 'kid' || id === 'women' || id === 'men' ? (<>
       <Title 
       title="Tienda"
       subtitle={`Productos Categoria ${id}`}
       className="mb-2"
       />
       <ProductGrid products={productsArr} />
         
        </>) : (  <NotFound />)
    }
      
    </>
    
  );
}
