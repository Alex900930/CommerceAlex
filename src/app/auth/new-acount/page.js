/* eslint-disable react/react-in-jsx-scope */
import { titleFonts } from '@/config/fonts';
import Link from 'next/link';

export default function NewAcount() {
  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-52">

      <h1 className={ `${ titleFonts.className } text-4xl mb-5` }>Nueva Cuenta</h1>

      <div className="flex flex-col">
        {/*Nombre Completo*/}
        <label htmlFor="nomecompleto">Nombre Completo</label>
        <input name='nomecompleto'
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="text" />

        {/*Correo Electronico*/}
        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email" />


        {/*Contraseña*/}
        <label htmlFor="pass">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password" />

        <button
          className="btn-primary">
          Crear cuenta
        </button>


        {/* divisor l ine */ }
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/login" 
          className="btn-secondary text-center">
          Login
        </Link>

      </div>
    </div>
  );
}