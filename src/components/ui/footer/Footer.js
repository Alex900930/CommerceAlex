import { titleFonts } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex w-full justify-center text-xs mb-10'>
       <Link href="/" >
       <span className={`${titleFonts.className} antialiased font-bold`}>CommerceAlex</span>
       <span> | Shop</span>
       <span> © {new Date().getFullYear()}</span>
       </Link>
    </div>
  )
}
