import img from '../images/jungle.png'

export const Contact = () => {

  return (
    <div className='contactSection'>
      <img alt="" src={img} />
      <div className='py-6 w-full bg-jungle-green flex flex-col items-center text-white' id="contact">

        <form className="mt-12 w-1/2" action="" method="POST">
        <div class="relative" >
            <input id="name" name="name" type="text" className="peer h-10 w-full bg-jungle-green border-0 border-b-2 border-white placeholder-transparent focus:placeholder:text-white-opacity focus:outline-none focus:border-b-2 focus:border-white" placeholder="Laura García" />
            <label for="email" className="absolute left-0 -top-4 text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-white peer-focus:text-sm">Nombre y apellidos</label>
          </div>
          <div class="relative mt-11" >
            <input id="email" name="email" type="email" className="peer h-10 w-full bg-jungle-green border-0 border-b-2 border-white placeholder-transparent focus:placeholder:text-white-opacity focus:outline-none focus:border-b-2 focus:border-white" placeholder="laura192@gmail.com" />
            <label for="email" className="absolute left-0 -top-4 text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-white peer-focus:text-sm">Email</label>
          </div>
          <div class="relative mt-10" >
            <label for="email" className="">Mensaje</label>
            <textarea id="message" name="message" type="text" className="peer h-20 w-full bg-jungle-green border-2 border-white placeholder-transparent focus:outline-none focus:border-white"/>
          </div>

          <input type="sumbit" value="Sign in" class="mt-5 px-4 py-2 rounded text-jungle-green hover:bg-rose-400 font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
        </form>

      </div>
    </div>


  );
}