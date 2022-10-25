import beachImgMobile from '../images/beach-m.png'
import beachImg from '../images/beach.png'
import data from '../data/hotelData.json'
import { HotelItem } from './HotelItem';

export const HotelSection = () => {

  return (
    <div className='text-grey bg-sand-yellow' id='hotel'>
      <img alt='' src={beachImgMobile} className='lg:hidden'/>
      <img alt='' src={beachImg} className='hidden lg:block'/>
      <div className='py-20 w-full p-8 flex flex-col items-center' data-aos="fade-up">
        <h2 className='text-4xl lg:text-5xl font-bold'>¿Dónde duermo?</h2>
        <div className='w-32 mt-5 mb-1'></div>
        <p className='w-full lg:w-3/6 font-normal text-center'>Para asistir a nuestra boda y poder disfrutar de un fin de semana en Chipiona, os ofrecemos los siguientes alojamientos con los que ya hemos contactado previamente.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-7'>
          {data.map(element =>
            <HotelItem element={element} key={element.id} />
          )}
        </div>
      </div>
    </div>
  );
}