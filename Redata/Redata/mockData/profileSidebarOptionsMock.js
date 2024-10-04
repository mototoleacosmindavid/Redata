import { SidebarOptionType } from '../main/components/profileSidebarOption/sidebarOption';

export const profileSidebarOptionsMock = [
  {
    optionType: SidebarOptionType.PERSONAL_DETAILS,
    optionLeftIcon: 'fa fa-id-card',
    optionRightIcon: 'fa fa-angle-left',
  },
  {
    optionType: SidebarOptionType.FUNDS,
    optionLeftIcon: 'fa fa-euro',
    optionRightIcon: 'fa fa-angle-left',
  },
  {
    optionType: SidebarOptionType.BETTING_HISTORY,
    optionLeftIcon: 'fa fa-history',
    optionRightIcon: 'fa fa-angle-left'
  },
  {
    optionType: SidebarOptionType.TRANSACTIONS,
    optionLeftIcon: 'fa fa-credit-card',
    optionRightIcon: 'fa fa-angle-left',
  },
  {
    optionType: SidebarOptionType.CLOSE_ACCOUNT,
    optionLeftIcon: 'fa fa-trash',
    optionRightIcon: 'fa fa-angle-left',
  }
];
