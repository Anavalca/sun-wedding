
export const HotelItem = ({element}) => {
  const { icon, title, web, price, info, location, isFull } = element;

  return (
    <div className={`p-5 lg:p-6 m-2 w-auto lg:w-85 h-80 bg-yellow-opacity flex flex-col items-left justify-between font-light drop-shadow ${isFull ? 'border-b-8 border-red' : ''}`} data-aos="fade-up">
      <img alt="" src={icon} className="w-14 pb-1"/>
      <h3 className="text-xl lg:text-2xl font-normal">{title}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <a href={web}  target="_blank" title="enlace a la web" alt="enlace a la web"
        className="underline decoration-wavy text-sm font-semibold tracking-wide pt-2 w-fit hover:text-red hover:scale-105" rel="noreferrer">Visitar web</a>
      <p>{location}</p>
      <p className={`${isFull ? 'absolute top-6 right-6 text-sm text-white font-normal tracking-wide bg-red pr-2 pl-2 rounded-full' : 'hidden'}`}>COMPLETO</p>
    </div>
  );
}