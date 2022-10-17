import skyImgMobile from '../images/sky-m.png'
import skyImg from '../images/sky.png'
import planeImg from '../images/plane.png'
import { Countdown } from './Countdown';

export const Header = () => {

  return (
    <div id="home" className='h-85 bg-sky-blue flex flex-col items-center justify-center'>
      <img alt="" src={skyImgMobile} className='lg:hidden absolute top-0' />
      <img alt="" src={skyImg} className='hidden lg:block absolute top-0' />
      <div className='w-full h-full flex flex-col items-center justify-center pt-24 md:pt-64 lg:pt-28'>
        <img alt="" src={planeImg} className="w-96 md:w-1/2 lg:w-4/12" />
        <h1 className='pt-10 pb-10 lg:pt-12 lg:pb-12 lg:pt-7 lg:pb-8 w-2/3 text-white font-sacramento text-center text-8xl lg:text-9xl drop-shadow'>Cristina y Carlos</h1>
        <Countdown />
      </div>
      
    </div>
  ); 
}