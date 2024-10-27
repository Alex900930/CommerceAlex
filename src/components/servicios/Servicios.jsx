"use client"
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import jugoImg from '../../../public/imgs/assets/jugos.jpg';
import vitaminaImg from '../../../public/imgs/assets/vtamina.jpg';
import calzados from '../../../public/imgs/calzados.webp';
import refrescoImg from '../../../public/imgs/assets/cocacola.jpg';
import roupaHomem from '../../../public/imgs/ropaHombre.jpg'
import roupaMulher from '../../../public/imgs/ropaMujer.jpg';
import roupaInfantil from '../../../public/imgs/ropaparaniños.jpeg';
import acessorios from '../../../public/imgs/accesorios.webp'

import Image from 'next/image';

function Serviços() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    
    <section id="serviços" className="py-16 col-span-2">
      <h3 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Nossos Serviços</h3>
      <div className="space-y-8">
        
        {/* Serviço 1: Roupas para Homens */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          <Image src={roupaHomem} alt="Roupas para Homens" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Roupas para Homens</h4>
            <p>Descubra nossa ampla seleção de roupas casuais e formais para homens.</p>
          </div>
        </div>

        {/* Serviço 2: Roupas para Mulheres */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          <Image src={roupaMulher} alt="Roupas para Mulheres" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:mr-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Roupas para Mulheres</h4>
            <p>Estilos modernos e elegantes projetados para realçar sua beleza.</p>
          </div>
        </div>

        {/* Serviço 3: Roupas para Crianças */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          <Image src={roupaInfantil} alt="Roupas para Crianças" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Roupas para Crianças</h4>
            <p>Roupas confortáveis e divertidas para os pequenos, ideais para qualquer ocasião.</p>
          </div>
        </div>

        {/* Serviço 4: Acessórios */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          <Image src={acessorios} alt="Acessórios" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:mr-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Acessórios</h4>
            <p>Complete seu estilo com nossa seleção de bolsas, cintos e mais.</p>
          </div>
        </div>

        {/* Serviço 5: Calçados */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          <Image src={calzados} alt="Calçados" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Calçados</h4>
            <p>De tênis casuais a sapatos formais, temos o calçado perfeito para você.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Serviços;
