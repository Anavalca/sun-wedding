import wavesImgMobile from '../images/waves-m.png'
import wavesImg from '../images/waves2.png'
import calendarIcon from '../icons/calendar.png'
import clockIcon from '../icons/wall-clock.png'
import locationIcon from '../icons/location.png'
import busIcon from '../icons/bus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Modal from 'react-modal'
import { Map } from './Map'

export const WeddingSection = () => {
  

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='text-white bg-sea-blue'>
      <img alt="" src={wavesImgMobile} className='lg:hidden'/>
      <img alt="" src={wavesImg} className='hidden lg:block'/>
      <div className='p-9 lg:pt-24 lg:pb-4 lg:w-full flex flex-col lg:flex-row justify-center items-start' id="wedding">
        <div className='w-full lg:w-96 lg:pr-7 pb-4 lg:pb-0 text-left lg:text-right border-b-2 lg:border-0'>
          <h2 className='text-6xl pb-4 font-extralight'>LA<br></br>BODA</h2>
          <p className='font-light'>No podemos celebrar este día tan especial sin ti, por eso hemos montado una super fiesta en la playa a la que estás invitado <br></br> ¿Te apuntas?</p>
        </div>
        <div className='w-full lg:w-96 lg:pl-7 pt-4 lg:pt-0 lg:border-l-2 flex flex-col font-light uppercase'>
          <div className='flex flex-row items-center pb-8'>
            <img alt="" src={calendarIcon} className="w-14" />
            <p className='pl-4 text-2xl'>3 de junio de 2023</p>
          </div>
          <div className='flex flex-row items-center pb-8'>
            <img alt="" src={clockIcon} className="w-14" />
            <p className='pl-4 text-2xl'>13:00</p>
          </div>
          <div className='flex flex-row items-center pb-8'>
            <img alt="" src={locationIcon} className="w-14" />
            <div className='pl-4'>
              <p className='text-2xl'>SAAM Club de Mar</p>
              <p className='capitalize'>Chipiona (Cádiz)</p>
              <button className='underline decoration-wavy text-sm font-semibold normal-case tracking-wide'
                onClick={toggleModal}>Consultar ubicación</button>
            </div>
          </div>
          <div className='flex flex-row items-center'>
            <img alt="" src={busIcon} className="w-14" />
            <p className='pl-4 normal-case'>Horario y lugar de recogida del autobús por determinar</p>
          </div>
        </div>
      </div>
      {/* POP UP */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='HOLA'
        ariaHideApp={false}
      >
        <Map
          mapCoordenateA="36.75188148513783"
          mapCoordenateB="-6.412953117657391"
          zoom="13"
          mapTitle="SAAM CLUB DE MAR"
          mapDescription="Pago Valdeconejos, 19, 11550 Chipiona, Cádiz"
          url="https://www.google.es/maps/place/SAAM+Club+de+Mar/@36.7518353,-6.4150989,17z/data=!3m1!4b1!4m5!3m4!1s0xd0e756381e89fc1:0x1738162071e506d1!8m2!3d36.7518353!4d-6.4129102?hl=es" />
        <button className="popUpInfoContainer" onClick={toggleModal}>
          <FontAwesomeIcon icon={faXmark} className='fa-l' />
        </button>
      </Modal>
    </div>
  );
}