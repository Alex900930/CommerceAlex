/* eslint-disable react/react-in-jsx-scope */

import "./globals.css";
import {inter}  from '@/config/fonts';

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
