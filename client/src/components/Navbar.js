import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import '../css/NavBar.css';

const NavBar = ({title}) => (
  <nav className='navbar'>
    <img src={logo} alt='react-logo' />
    <h1>{ title }</h1>
    <span className="expand" />
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/cupcakes'>Cupcakes</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </nav>
);

export default NavBar;