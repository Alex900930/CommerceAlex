"use client"
/* eslint-disable react/react-in-jsx-scope */
import ProductGrid from "@/app/(shop)/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { products } from "../../seed/seed";
import { useMainStore } from '@/store/ui/ui-store';

export default function Home() {
  const { isOpenMain } = useMainStore();

  if (!isOpenMain) {
    // Retorna null o algún contenido vacío si `isOpenMain` es false
    return null;
  }

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
