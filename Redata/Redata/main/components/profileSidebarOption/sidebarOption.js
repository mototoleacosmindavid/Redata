import { createPersonaDetailsOptions } from './personalDetailsOption/personalDetailsOption';
import { createBettingHistoryOption } from './bettingHistoryOption/bettingHistoryOption';
import { createFundsOption } from './fundsOptions/fundsOption';
import { createTransactionsOptions } from './transactionsOption/transactionsOption';
import { createCloseAccountOption } from './closeAccountOption/closeAccountOption';
import { PROFILE_PANEL_TITLE_DEFAULT } from '../../pages/profile/profile';

export const SidebarOptionType = {
  PERSONAL_DETAILS : 'Personal Details',
  FUNDS : 'Funds',
  BETTING_HISTORY : 'Betting History',
  TRANSACTIONS : 'Transactions',
  CLOSE_ACCOUNT : 'Delete Account'
};

function createSidebarOption({
  optionLeftIcon,
  optionRightIcon,
  optionType,
}) {

  const sidebarOptionWrapper = document.createElement('a');
  sidebarOptionWrapper.className = 'sidebar-option-wrapper';
  sidebarOptionWrapper.id = `#${optionType}`;

  sidebarOptionWrapper.innerHTML = `
     <span class="sidebar-option-icon left">
       <i class="${optionLeftIcon}"></i>
     </span>
     <div class="sidebar-option">${optionType}</div>
     <a class="sidebar-option-icon right">
       <i class="${optionRightIcon}"></i>
     </a>
    `;

  return sidebarOptionWrapper;
}

function createSidebarOptionContent({
  optionType,
  user,
}) {
  switch (optionType) {
  case SidebarOptionType.PERSONAL_DETAILS:
    return createPersonaDetailsOptions(user);

  case SidebarOptionType.BETTING_HISTORY:
    return createBettingHistoryOption(user);

  case SidebarOptionType.FUNDS:
    return createFundsOption(user);

  case SidebarOptionType.TRANSACTIONS:
    return createTransactionsOptions(user);

  case SidebarOptionType.CLOSE_ACCOUNT:
    return createCloseAccountOption();

  default:
    return document.createElement('div');
  }
}

export function mapOptionToContent(options, user) {
  return options.map(option => ({
    optionContainer: createSidebarOption({
      ...option,
      id: option.optionType,
    }),
    optionContent: createSidebarOptionContent({
      ...option,
      user,
    }),
  }));
}

export function initSidebarOption(optionId, user) {
  const optionTitle = optionId.slice(1);

  document
    .getElementById(optionId)
    .classList
    .add('active');

  const profilePanelTitle = document.querySelector('.profile-panel-title');

  profilePanelTitle.innerHTML =
   `${PROFILE_PANEL_TITLE_DEFAULT} &#8594; ${optionTitle}`;

  const content = document.querySelector('.profile-panel-content');
  const sidebarContent = createSidebarOptionContent({ optionType: optionTitle, user });
  content.innerHTML = sidebarContent.innerHTML;
}

