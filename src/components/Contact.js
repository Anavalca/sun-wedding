import jungleImgMobile from '../images/jungle-m.png'
import jungleImg from '../images/jungle.png'
import contactIcon from '../icons/form.png'
import emailjs from 'emailjs-com';
import { useState } from "react";
import AOS from 'aos';
AOS.init();

const YOUR_SERVICE_ID = "service_jb41tc9";
const YOUR_TEMPLATE_ID = "template_e9uaova";
const YOUR_USER_ID = "user_priKHmSsrK6ZMxp3YGXJ4";

export function validateEmail(email) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return String(email).toLowerCase().match(pattern) !== null;
}

export const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [submittedForm, setSubmittedForm] = useState(false);

  const enableSubmit = name && email && message;

  const sendEmail = (e) => {
    e.preventDefault();
    debugger;

    if (enableSubmit && !submittedForm) {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
        .then((result) => {
          setSubmittedForm(true);
        }, (error) => {
          alert('Ha ocurrido un error al enviar el formualrio. Por favor, vuelve a intentarlo más tarde');
        });
    }
  }

  return (
    <div className='contactSection bg-jungle-green' id="contact">
      <img alt="" src={jungleImgMobile} className='lg:hidden'/>
      <img alt="" src={jungleImg} className='hidden lg:block'/>
      <div className='p-8 py-18 lg:pb-20 w-full flex flex-col lg:flex-row-reverse justify-center text-white text-center lg:text-left' data-aos="fade-up" data-aos-duration="4000">
        <div className='w-full lg:w-96 flex flex-col justify-center lg:border-l-2 lg:ml-9 lg:pl-9 pb-12 lg:pb-0'>
          <div className='flex flex-col lg:flex-row  items-center  w-full  pb-5 lg:pb-2'>
            <img alt="" src={contactIcon} className="w-16 mr-3 hidden lg:block" />
            <h2 className='text-4xl font-bold'>¿Tienes dudas? Escríbenos</h2>
          </div>
          <p className='font-light'>Puedes ponerte en contacto con nosotros o confirmar tu asistencia rellenando el siguiente formulario.</p>
        </div>
        <form className="w-full lg:w-96 border-2 lg:border-0 p-6 pt-8 lg:p-0" onSubmit={sendEmail}>
          <div className="relative" >
            <input
              className="peer h-10 w-full bg-jungle-green border-0 border-b-2 border-white placeholder:text-jungle-green focus:placeholder:text-white-opacity focus:outline-none focus:border-b-2 focus:border-white" placeholder="Laura García"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="contact_name"
            />
            <label htmlFor="name" className="absolute left-0 -top-4 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-white peer-focus:text-sm">Nombre y apellidos</label>
          </div>
          <div className="relative mt-12" >
            <input
              className="peer h-10 w-full bg-jungle-green border-0 border-b-2 border-white placeholder:text-jungle-green focus:placeholder:text-white-opacity focus:outline-none focus:border-b-2 focus:border-white" placeholder="laura192@gmail.com"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="contact_email"
            />
            <label htmlFor="email" className="absolute left-0 -top-4 text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-white peer-focus:text-sm">Email</label>
          </div>
          <div className="relative mt-14 text-left" >
            <label htmlFor="email">Mensaje</label>
            <textarea
              className="mt-1 peer h-36 w-full bg-jungle-green border-2 border-white placeholder:text-white-opacity focus:outline-none focus:border-white"
              id="message"
              type="text"
              placeholder="Intolerancias alimenicias, plazas que necesitas para el bus, etc."
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              name="message"
            />
          </div>

          <input
          id="submit"
          type="submit"
          value={`${submittedForm ? 'FORMULARIO ENVIADO' : 'ENVIAR'}`}
          disabled={!enableSubmit}  
          className="mt-5 px-4 py-2 rounded text-jungle-green bg-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
        </form>

      </div>
    </div>


  );
}