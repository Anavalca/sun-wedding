import beachImgMobile from '../images/beach-m.png'
import beachImg from '../images/beach.png'
import data from '../data/hotelData.json'
import { HotelItem } from './HotelItem';

export const HotelSection = () => {

  return (
    <div className='text-grey bg-sand-yellow'>
      <img alt="" src={beachImgMobile} className='lg:hidden'/>
      <img alt="" src={beachImg} className='hidden lg:block'/>
      <div className='py-20 w-full p-10 flex flex-col items-center' id="hotel">
        <h2 className='text-5xl lg:text-6xl font-extralight uppercase'>Alojamientos</h2>
        <div className='w-32 border-b-2 mt-5 mb-5'></div>
        <p className='w-full lg:w-3/6 font-normal text-center'>Para asistir a nuestra boda y poder disfrutar de un fin de semana en Chipona, os ofrecemos los siguientes alojamientos con los que ya hemos contactado previamente.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 pt-7'>
          {data.map(element =>
            <HotelItem element={element} key={element.id} />
          )}
        </div>
      </div>
    </div>
  );
}