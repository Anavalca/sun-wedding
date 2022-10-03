import img from '../images/sky.png'
import img2 from '../images/plane.png'
import { Countdown } from './Countdown';

export const Header = () => {

  return (
    <div id="home">
      <img alt="" src={img} />
      <div className='pt-18 pb-24 w-full bg-sky-blue flex flex-col items-center' id="home">
        <img alt="" src={img2} className="w-2/5"/>
        <h1 className='pt-4 pb-6 text-white font-light text-8xl drop-shadow' >Cristina & Carlos</h1>
        <Countdown />
      </div>
    </div>
  );
}