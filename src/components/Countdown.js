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

  let isDay = weddingDay > today.getTime()

  useEffect(() => {
    setInterval(() => setToday(new Date()), 1000);
    return function cleanup() {
      clearInterval()
    };
  }, [])

  return (
    <>
      {isDay && (
        <div className='flex flex-row text-grey font-medium'>
          <div className='flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 m-1 lg:m-2 bg-white rounded-full '>
            <p className="text-xl lg:text-2xl opacity-80">{days}</p>
            <p className='text-sm opacity-80'>días</p>
          </div>
          <div className='flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 m-1 lg:m-2 bg-white rounded-full'>
            <p className="text-xl lg:text-2xl opacity-80">{hours}</p>
            <p className='text-sm opacity-80'>horas</p>
          </div>
          <div className='flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 m-1 lg:m-2 bg-white rounded-full'>
            <p className="text-xl lg:text-2xl opacity-80">{minutes}</p>
            <p className='text-sm opacity-80'>minutos</p>
          </div>
          <div className='flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 m-1 lg:m-2 bg-white rounded-full'>
            <p className="text-xl lg:text-2xl opacity-80">{seconds}</p>
            <p className='text-sm opacity-80'>segundos</p>
          </div>
        </div>
      )}
    </>
  );
}