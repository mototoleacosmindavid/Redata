import '../../global.css';
import '../../components/navbar/navbar.css';

import Navbar from '../../components/navbar/navbar';

const raceBody = document.querySelector('body');

const navbar = new Navbar(raceBody, 'Louie');

navbar.init();
