import img from '../images/sky.png'
import img2 from '../images/plane.png'

export const Header = () => {

  return (
    <div id="home">
      <img alt="" src={img} />
      <div className='pt-24 pb-28 w-full bg-sky-blue flex justify-center' id="home">
        <img alt="" src={img2} className="w-2/3"/>
      </div>
    </div>
  );
}