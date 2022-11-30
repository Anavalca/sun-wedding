import beachImgMobile from '../images/beach-m.png'
import beachImg from '../images/beach.png'
import data from '../data/hotelData.json'
import { HotelItem } from './HotelItem';
import { useState } from 'react';

const CATEGORIES = [
  {
    text: "Hotel",
    value: "hotel"
  },
  {
    text: "Apartamento",
    value: "apartament"
  },
  {
    text: "Hostal",
    value: "hostel"
  }
]

export const HotelSection = () => {
  const [categoryChecks, setCategoryChecks] = useState({
    hotel: true,
    apartament: true,
    hostel: true,
  });
  // const [categoryChecks2, setCategoryChecks2] = useState(CATEGORIES.reduce((accumulate, current) => ({ ...accumulate, [current.value]: true }), {}));

  const changeCheckboxState = (e) => {
    setCategoryChecks({ ...categoryChecks, [e.target.value]: e.target.checked });
  };

  return (
    <div className='text-grey bg-sand-yellow' id='hotel'>
      <img alt='' src={beachImgMobile} className='lg:hidden' />
      <img alt='' src={beachImg} className='hidden lg:block' />
      <div className='py-20 w-full p-8 flex flex-col items-center' data-aos="fade-up">
        <h2 className='text-4xl lg:text-5xl font-bold'>¿Dónde duermo?</h2>
        <div className='w-32 mt-5 mb-1'></div>
        <p className='w-full lg:w-3/6 2xl:w-2/6 font-normal text-center'>Para asistir a nuestra boda y poder disfrutar de un fin de semana en Chipiona, os ofrecemos los siguientes alojamientos con los que ya hemos contactado previamente.</p>
        <div className='flex pt-2'>
          {CATEGORIES.map((category, index) =>
            <div className='p-3 flex items-center' key={index}>
              <input className='mr-1 w-5 h-5 text-grey appearance-none cursor-pointer focus:shadow-none' onChange={changeCheckboxState}
                value={category.value}
                type="checkbox"
                checked={categoryChecks[category.value]} />
              <label>{category.text}</label>
            </div>
          )}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-2'>
          {data
            .filter(element => categoryChecks[element.type])
            .map(element =>
              <HotelItem element={element} key={element.id} />
            )}
        </div>
      </div>
    </div>
  );
}
