import skyImgMobile from '../images/sky-m.png'
import skyImg from '../images/sky.png'
import planeImg from '../images/plane.png'
import { Countdown } from './Countdown';

export const Header = () => {

  return (
    <div id="home" className='h-85 bg-sky-blue flex flex-col items-center justify-center'>
      <img alt="" src={skyImgMobile} className='lg:hidden absolute top-0'/>
      <img alt="" src={skyImg} className='hidden lg:block absolute top-0'/>
      <div className='w-full h-full flex flex-col items-center justify-center pt-15 lg:pt-28' id="home">
        <img alt="" src={planeImg} className="w-11/12 lg:w-2/5"/>
        <h1 className='pt-12 pb-12 lg:pt-8 lg:pb-8 w-2/3 text-white font-light text-center text-7xl lg:text-8xl drop-shadow' >Cristina & Carlos</h1>
        <Countdown />
      </div>
    </div>
  );
}