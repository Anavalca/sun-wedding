import img from '../images/waves2.png'
import icon1 from '../icons/calendar.png'
import icon2 from '../icons/wall-clock.png'
import icon3 from '../icons/location.png'

export const WeddingSection = () => {

  return (
    <div className='text-white'>
      <img alt="" src={img} />
      <div className='pt-20 pb-3 w-full bg-sea-blue flex flex-row justify-center items-start' id="wedding">
        <div className='w-1/5 pr-7 text-right border-r-2'>
          <h2 className='text-6xl pb-2 font-extralight'>LA<br></br>BODA</h2>
          <p className='font-light'>No podemos celebrar este día tan especial sin vosotros, por eso os dejamos aquí toda la información que necesitáis. ¿Os apuntáis?</p>
        </div>
        <div className='w-1/5 pl-7 flex flex-col font-extralight uppercase'>
          <div className='flex flex-row items-center pb-8'>
            <img alt="" src={icon1} className="w-14"/>
            <p className='pl-4 text-2xl'>3 de junio de 2023</p>
          </div>
          <div className='flex flex-row items-center pb-8'>
          <img alt="" src={icon2} className="w-14"/>
            <p className='pl-4 text-2xl'>13:00</p>
          </div>
          <div className='flex flex-row items-center'>
          <img alt="" src={icon3} className="w-14"/>
            <p className='pl-4 text-2xl'>SAAM Club de Mar</p>
          </div>
        </div>
      </div>
    </div>
  );
}