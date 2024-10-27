"use client"
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import TopMenu from '@/components/ui/top-menu/TopMenu';
import SideBar from "@/components/ui/sideBar/SideBar";
import Footer from '@/components/ui/footer/Footer';
import MainComp from '@/components/ui/mainComp/MainComp';
import { useSidebarStore, useMainStore } from '@/store/ui/ui-store';
import ImagenBackground from '@/components/ui/imagenBackGround/ImagenBackground';
import SuperTop from '@/components/ui/SuperTop/SuperTop';
import TopMenuMain from '@/components/ui/TopMenuMain/TopMenuMain';
import NavMain from '@/components/ui/NavMain/NavMain';
import Secciones from '@/components/ui/Secciones/Secciones';
import SaibaMas from '@/components/ui/SaibaMas/SaibaMas';
import Servicios from "@/components/servicios/Servicios";

export default function ShopLayout({ children }) {

  const { isOpenMain } = useMainStore();

    return (
      <main className="min-h-screen">  
        <SuperTop />
        <TopMenuMain />
        <NavMain />
        {!isOpenMain && (
        <>
          <ImagenBackground />
          <Secciones />
          <SaibaMas />  
          <Servicios />
        </>
      )}
        <SideBar />
         <div className='px-0 sm:px-10'>
          {children}
          </div>
        <Footer />
        
        
      </main>
    );
  }
  