import './Navbar.scss';
import Pronged from '../../../assets/pronged.png';
import { MenuSvg } from './MenuSvg';
import BinaryCounter from './Binary/Binary';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="hamburger">
          <MenuSvg />
          <span>MENU</span>
        </div>
        <h1 className='title'>Home</h1>
        <img src={Pronged} alt="Logo" className="logo" />
      </div>
      <BinaryCounter />
    </>
  );
};

export default Navbar;
