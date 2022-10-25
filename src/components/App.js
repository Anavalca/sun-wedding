import '../stylesheets/App.scss';
import { Menu } from './Menu';
import { BurgerMenu } from './BurgerMenu';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import AOS from 'aos';
AOS.init({
  duration: 800,
  delay: 100,
  offset: 230
});

export const App = () => {

  return (
    <div>
      <BurgerMenu />
      <Menu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
