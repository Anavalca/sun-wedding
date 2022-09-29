import img from '../images/waves.svg'
import img2 from '../images/beach.png'

export const InfoSection = () => {

  return (
    <div className='infoSection'>
      <img alt="" src={img}></img>
      <div className='infoBackground' id="home">
      </div>
      <img alt="" src={img2}></img>
    </div>
  );
}