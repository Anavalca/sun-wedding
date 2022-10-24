
export const Footer = () => {

  return (
    <footer className="w-full h-20 lg:h-10 flex flex-col lg:flex-row items-center justify-evenly pl-8 pr-12 lg:px-8 text-sm">
      <a className='flex items-center' rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img className="w-16" alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"/>
        <span className="ml-2">Este obra está bajo una licencia de Creative Commons.</span>
      </a>
      <a href="https://ana-valdivia.netlify.app/#/" alt='Ana Valdivia Portfolio' title='Ana Valdivia Portfolio' target='_blank' rel='noreferrer noopener'><span>Web realizada y diseñada por <span className="underline">Ana Valdivia Cano</span>.</span></a>
    </footer >
  );
}

