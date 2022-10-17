import { useState } from "react";

export const BurgerMenu = () => {

  const [burguerToogle, setBurguerToogle] = useState(false)

  document.body.style.overflow = burguerToogle ? 'hidden' : 'auto';

  return (
    <>
      <div className={`hamburguerNav ${burguerToogle ? 'open' : ''}`} onClick={() => setBurguerToogle(!burguerToogle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${burguerToogle ? 'hamburguerNavOpen' : 'closed'}`}>
        {burguerToogle && (
          <nav className='w-full text-grey text-lg pl-5 pt-8 pb-4 flex flex-col bg-white rounded-t-3xl'>
            <a href='#home' className='p-3' onClick={() => setBurguerToogle(!burguerToogle)}>Inicio</a>
            <a href="#wedding" className='p-3' onClick={() => setBurguerToogle(!burguerToogle)}>La boda</a>
            <a href="#hotel" className='p-3' onClick={() => setBurguerToogle(!burguerToogle)}>Alojamientos</a>
            <a href="#contact" className='p-3' onClick={() => setBurguerToogle(!burguerToogle)}>Contacto</a>
          </nav>
        )}
      </div>
    </>
  );
}