
export const HotelItem = ({element}) => {
  const { icon, title, web, price, info, location, full } = element;

  return (
    <div className={`p-6 m-2 w-96 h-72 bg-white-opacity flex flex-col items-left justify-between font-light drop-shadow ${full ? 'border-b-8 border-red' : ''}`}>
      <img alt="" src={icon} className="w-16 pb-2"/>
      <h3 className="uppercase text-2xl font-light">{title}</h3>
      <p className="">{price}</p>
      <p>{info}</p>
      <a href={web}  target="_blank" title="enlace a la web" alt="enlace a la web"
        className="underline decoration-wavy text-sm font-semibold pt-2" rel="noreferrer">Visitar web</a>
      <p>{location}</p>
      <p className={`${full ? 'absolute top-9 right-7 rotate-12 text-red font-semibold border-2' : 'hidden'}`}>COMPLETO</p>
    </div>
  );
}