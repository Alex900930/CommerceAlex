/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { titleFonts } from "@/config/fonts";

export default function Title({title, subtitle, className}) {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`${titleFonts.className} antialiased text-4xl font-semibold my-5`}>{title}</h1>
      {subtitle && <h3 className="text-xl mb-5">{subtitle}</h3>}
    </div>
  )
}
