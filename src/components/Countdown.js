import { useState, useEffect } from "react";

export const Countdown = () => {

  const [today, setToday] = useState(new Date())

  const weddingDay = new Date(2023, 5, 3, 13, 0, 0).getTime();
  let countdown = (weddingDay - today.getTime());

  const days = Math.floor(countdown / (1000 * 3600 * 24));
  countdown = countdown - (days * (1000 * 3600 * 24))
  const hours = Math.floor(countdown / (1000 * 3600));
  countdown = countdown - (hours * (1000 * 3600))
  const minutes = Math.floor(countdown / (1000 * 60));
  countdown = countdown - (minutes * (1000 * 60))
  const seconds = Math.floor(countdown / (1000));


  useEffect(() => {
    setInterval(() => setToday(new Date()), 1000);
    return function cleanup() {
      clearInterval()
    };
  }, [])

  return (
    <div className='flex flex-row text-grey font-light'>
      <div className='flex flex-col items-center justify-center w-24 h-24 m-2 bg-white rounded-full'>
        <p className="text-2xl">{days}</p>
          <p className='text-sm tracking-wide'>días</p>
      </div>
      <div className='flex flex-col items-center justify-center w-24 h-24 m-2 bg-white rounded-full'>
        <p className="text-2xl">{hours}</p>
          <p className='text-sm tracking-wide'>horas</p>
      </div>
      <div className='flex flex-col items-center justify-center w-24 h-24 m-2 bg-white rounded-full'>
        <p className="text-2xl tracking-wide">{minutes}</p>
          <p className='text-sm tracking-wide'>minutos</p>
      </div>
      <div className='flex flex-col items-center justify-center w-24 h-24 m-2 bg-white rounded-full'>
        <p className="text-2xl">{seconds}</p>
          <p className='text-sm tracking-wide'>segundos</p>
      </div>
    </div>
  );
}