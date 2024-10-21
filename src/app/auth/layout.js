import React from 'react';

export default function ShopLayout({ children }) {
    return (
      <main className="flex justify-center">
        <div className='w-full sm:w-[350px] px-10'>
          {children}
        </div>
      </main>
    );
  }
  