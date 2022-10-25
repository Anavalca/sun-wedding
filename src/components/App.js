import '../stylesheets/App.scss';
import { Menu } from './Menu';
import { BurgerMenu } from './BurgerMenu';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import AOS from 'aos';
AOS.init();

export const App = () => {

  return (
    <div>
      <BurgerMenu/>
      <Menu/>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}
