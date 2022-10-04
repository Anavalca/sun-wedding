import img from '../images/beach.png'
import data from '../data/hotelData.json'
import { HotelItem } from './HotelItem';

export const HotelSection = () => {

  return (
    <div className='text-grey'>
      <img alt="" src={img} />
      <div className='py-20 w-full bg-sand-yellow flex flex-col items-center' id="hotel">
        <h2 className='text-6xl font-extralight uppercase'>Alojamientos</h2>
        <div className='w-32 border-b-2 mt-5 mb-5'></div>
        <p className='w-3/6 font-normal text-center'>Para asistir a nuestra boda y poder disfrutar de un fin de semana en Chipona, os ofrecemos los siguientes alojamientos con los que ya hemos contactado previamente.</p>
        <div className='flex justify-center flex-wrap pt-6 w-4/5'>
          {data.map(element =>
            <HotelItem element={element} key={element.id} />
          )}
        </div>
      </div>
    </div>
  );
}