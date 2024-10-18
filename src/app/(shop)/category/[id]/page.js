/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import ProductGrid from "@/app/(shop)/products/product-grid/ProductGrid";
import NotFound from '../not_found';
import { products } from "../../../../seed/seed";
import Title from "@/components/ui/title/Title";

export default function Cat({ params }) {
  const { id } = params;

   // Función para obtener el nombre completo de la categoría
   const getFullCategoryName = (category) => {
    switch(category) {
      case 'kid':
        return 'crianças';
      case 'men':
        return 'homens';
      case 'women':
        return 'mulheres';
      default:
        return '';
    }
  };

 // Filtrar productos y obtener el nombre de la categoría
 const productsArr = products.filter(prod => prod.gender === id);
 const categoryTitle = getFullCategoryName(id);
  
  return (
    <>
    {
        id === 'kid' || id === 'women' || id === 'men' ? (<>
       <Title 
       title="Loja"
       subtitle={`Produtos para ${categoryTitle}`}
       className="mb-2"
       />
       <ProductGrid products={productsArr} />
         
        </>) : (  <NotFound />)
    }
      
    </>
    
  );
}
