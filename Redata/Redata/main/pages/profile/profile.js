import '../../global.css';
import '../../components/navbar/navbar.css';
import './profile.css';

import Navbar from '../../components/navbar/navbar';
// eslint-disable-next-line import/no-cycle
import {
  initSidebarOption,
  mapOptionToContent,
  SidebarOptionType,
} from '../../components/profileSidebarOption/sidebarOption';
// eslint-disable-next-line import/no-cycle
import { profileSidebarOptionsMock } from '../../../mockData/profileSidebarOptionsMock';
import { userMock } from '../../../mockData/userMock';
import { authorizeUser } from "../../utils/authorizeUser";

authorizeUser();

const profileHeader= document.querySelector('header');

const navbar = new Navbar(profileHeader, 'Louie');

navbar.init();

export const PROFILE_PANEL_TITLE_DEFAULT = 'Profile Management Panel';

const sidebar = document.querySelector('.sidebar');

const options = mapOptionToContent(profileSidebarOptionsMock, userMock);

options.forEach(option => {
  sidebar.appendChild(option.optionContainer);
});

console.log(options);

(function initSideBar() {
  const optionsAnchors = [
    ...document.querySelectorAll('.sidebar-option-wrapper')
  ];

  optionsAnchors.forEach((optionAnchor)=> {
    optionAnchor.addEventListener('click', ()=> {
      const alreadyActiveOption = optionsAnchors.find(
        option => option.classList.contains('active')
      );

      if(alreadyActiveOption) {
        alreadyActiveOption.classList.remove('active');
        alreadyActiveOption.
          lastElementChild.
          lastElementChild.
          className = 'fa fa-angle-left';
      }

      optionAnchor.classList.add('active');

      optionAnchor.lastElementChild.lastElementChild.className = 'fa fa-angle-right';

      const isOptionValid = Object.values(SidebarOptionType).includes(
        optionAnchor.id.slice(1)
      );

      if(isOptionValid) initSidebarOption(optionAnchor.id, userMock);
    });
  });
})();

