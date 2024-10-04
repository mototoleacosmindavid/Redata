import '../../global.css';
import '../../components/navbar/navbar.css';

import Navbar from '../../components/navbar/navbar';

const ratBody = document.querySelector('body');

const navbar = new Navbar(ratBody, 'Louie');

navbar.init();
