import wavesImgMobile from '../images/waves-m.png'
import wavesImg from '../images/waves2.png'
import giftImg from '../images/uapo.jpeg'
import calendarIcon from '../icons/calendar.png'
import clockIcon from '../icons/wall-clock.png'
import locationIcon from '../icons/location.png'
import busIcon from '../icons/bus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Modal from 'react-modal'
import { Map } from './Map'

export const WeddingSection = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='text-white bg-sea-blue flex flex-col items-center' id='wedding'>
      <img alt='' src={wavesImgMobile} className='lg:hidden' />
      <img alt='' src={wavesImg} className='hidden lg:block' />
      <div className='p-8 pt-20 lg:pt-24 lg:pb-4 lg:w-800 flex flex-col lg:flex-row justify-center items-start' data-aos='fade-up' data-aos-duration='2000' >
        <div className='w-full lg:w-1/2 lg:pr-7 pb-10 lg:pb-0 text-center lg:text-left lg:text-right'>
          <h2 className='text-4xl lg:text-6xl pb-5 lg:pb-2 font-bold lg:pl-0'>¡Vamos de boda!</h2>
          <p className='font-light pb-3'>No podemos celebrar este día tan especial sin ti, por eso hemos montado una super fiesta en la playa a la que estás invitado.</p>
          <p className='font-light'>¡No te preocupes por nada! Iremos en autobús hasta el restaurante donde se celebrará todo el evento. ¿Te apuntas?</p>

        </div>
        <div className='w-full lg:w-1/2 lg:pl-7 pt-6 lg:pt-0 lg:border-l-2 flex flex-wrap lg:flex-col font-medium text-center lg:text-left'>
          <div className='w-1/2 lg:w-auto flex flex-col lg:flex-row items-center pb-11 lg:pb-7'>
            <img alt='' src={calendarIcon} className='w-16 lg:w-14 pb-2 lg:pb-0' />
            <p className='lg:pl-4 text-lg lg:text-2xl'>3 de junio de 2023</p>
          </div>
          <div className='w-1/2 lg:w-auto flex flex-col lg:flex-row items-center pb-11 lg:pb-7'>
            <img alt='' src={clockIcon} className='w-16 lg:w-14 pb-2 lg:pb-0' />
            <p className='lg:pl-4 text-lg lg:text-2xl'>13:00</p>
          </div>
          <div className='w-1/2 lg:w-auto flex flex-col lg:flex-row items-center pb-11 lg:pb-7'>
            <img alt='' src={locationIcon} className='w-16 lg:w-14 pb-2 lg:pb-0' />
            <div className='lg:pl-4'>
              <p className='text-lg lg:text-2xl'>Saam Club de Mar</p>
              <button className='underline decoration-wavy text-sm font-semibold normal-case tracking-wide hover:text-jungle-green hover:scale-105'
                onClick={toggleModal}>Consultar ubicación</button>
            </div>
          </div>
          <div  id="prewedding" className='w-1/2 lg:w-auto flex flex-col lg:flex-row items-center'>
            <img alt='' src={busIcon} className='w-16 lg:w-14 pb-2 lg:pb-0' />
            <p className='lg:pl-4 text-normal'>Habrá un autobús de ida y vuelta desde el centro de Chipiona hasta el restaurante. Recogida en Av. de Sevilla.</p>
          </div>
        </div>
      </div>
      <div id="photos" className='m-8 w-auto lg:w-800 mt-5 lg:mt-12 p-5 lg:mb-5 border-2' data-aos='fade-up' >
        <h4 className='text-3xl font-bold lg:pl-0'>Preboda</h4>
        <p className='font-light'>El viernes, 2 de junio, os esperamos a partir de las 20:00h en  
        <a href='https://www.google.com/maps/place/Restaurante+El+Potalazo/@36.741266,-6.4392737,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e750918ad7f41:0xe69dfd86020e49c0!8m2!3d36.741266!4d-6.4366988!16s%2Fg%2F11c0q_dzt2?entry=ttu' target='_blank' rel='noreferrer noopener' className='underline decoration-wavy text-lg font-semibold tracking-wide'> Restaurante El Portalazo </a> 
        para disfrutar de unas cañas y picoteo. El sitio está al lado de la playa.. ¡nada de dresscode ni tacones! Previamente se hará una ofrenda a la Virgen de Regla en el Santuario.</p>
        <p className='font-light'></p>
      </div>
      <div className='m-8 w-auto lg:w-800 bg-white rounded lg:rounded-full flex flex-col lg:flex-row justify-center items-center mt-5 p-5 lg:p-2' data-aos='fade-up' data-aos-duration='2000' >
        <a href='https://www.fundacionuapo.org/' target="_blank" rel="noopener noreferrer">
          <img alt='' src={giftImg} className='max-w-none h-14 lg:h-11 lg:pl-2' />
        </a>
        <p className='text-grey text-sm lg:pl-3 lg:pr-2'>Pensamos que otra forma de festejar este día es compartir esa alegría con un gesto solidario. Por este motivo, en lugar de ofrecerte un simple objeto, hemos decidido donar ese dinero a la
          <a href='https://www.fundacionuapo.org/' target="_blank" rel="noopener noreferrer" className='font-semibold'> Fundación UAPO </a>
          de Granada.</p>
      </div>

        <a  href='https://photos.app.goo.gl/TuFmet19V1teu6QCA' target="_blank" rel="noopener noreferrer" 
          className='flex flex-col mt-4' data-aos='fade-up' data-aos-duration='2000'>
          <FontAwesomeIcon icon={faUpload} className='fa-2xl pb-2' />
          <span className='text-2xl font-bold lg:pl-0'>Comparte tus fotos</span>
        </a>

      {/* POP UP */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
      >
        <Map
          mapCoordenateA='36.75188148513783'
          mapCoordenateB='-6.412953117657391'
          zoom='13'
          mapTitle='SAAM CLUB DE MAR'
          mapDescription='Pago Valdeconejos, 19, 11550 Chipiona, Cádiz'
          url='https://www.google.es/maps/place/SAAM+Club+de+Mar/@36.7518353,-6.4150989,17z/data=!3m1!4b1!4m5!3m4!1s0xd0e756381e89fc1:0x1738162071e506d1!8m2!3d36.7518353!4d-6.4129102?hl=es' />
        <button className='popUpInfoContainer' onClick={toggleModal}>
          <FontAwesomeIcon icon={faXmark} className='fa-l' />
        </button>
      </Modal>
    </div>
  );
}