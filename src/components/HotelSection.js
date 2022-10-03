import img from '../images/beach.png'

export const HotelSection = () => {

  return (
    <div className=''>
      <img alt="" src={img}/>
      <div className='py-6 w-full bg-sand-yellow flex flex-col items-center' id="hotel">
      <h2 className='text-6xl pb-4 font-extralight uppercase text-white underline'>Alojamientos</h2>
      </div>
    </div>
  );
}