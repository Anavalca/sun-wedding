import img from '../images/beach.png'

export const HotelSection = () => {

  return (
    <div>
      <img alt="" src={img}/>
      <div className='py-6 w-full bg-sand-yellow' id="hotel">
      </div>
    </div>
  );
}