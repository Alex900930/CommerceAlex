/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import TopMenu from '@/components/ui/top-menu/TopMenu';
import SideBar from "@/components/ui/sideBar/SideBar";

export default function ShopLayout({ children }) {
    return (
      <main className="min-h-screen">
       <TopMenu />
{/*        <SideBar /> */}
       <div className='px-0 sm:px-10'>
        {children}
       </div>
        
      </main>
    );
  }
  