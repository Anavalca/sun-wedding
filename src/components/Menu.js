
export const Menu = () => {

  return (
    <nav className='fixed top-1/3 right-0 bg-white w-40 p-5 rounded-l-lg z-10 hidden lg:block'>
      <ul className='flex flex-col gap-5'>
        <li><a href="#home" className="hover:font-bold hover:underline hover:decoration-wavy hover:text-red" >Inicio</a></li>
        <li><a href="#wedding" className="hover:font-bold hover:underline hover:decoration-wavy hover:text-sea-blue">La boda</a></li>
        <li><a href="#prewedding" className="hover:font-bold hover:underline hover:decoration-wavy hover:text-jungle-green">Preboda</a></li>
        <li><a href="#photos" className="hover:font-bold hover:underline hover:decoration-wavy hover:text-red">Fotos</a></li>
        <li><a href="#hotel" className="hover:font-bold hover:underline hover:decoration-wavy hover:text-sea-blue">Alojamientos</a></li>
        <li><a href="#contact" className="hover:font-bold hover:underline hover:decoration-wavy hover:text-jungle-green">Contacto</a></li>
      </ul>
    </nav>
  );
}