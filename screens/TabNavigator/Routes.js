import {
  CreateFocusIcon,
  CreateIcon,
  HomeFocusedIcon,
  HomeIcon,
  UserFocusedIcon,
  UserIcon,
} from '../../Icons';

import {HomeStack, CreateStack, LoginStack} from '../Stack';

export const routes = [
  {
    name: 'Anasayfa',
    component: HomeStack,
    icon: HomeIcon,
    focusedIcon: HomeFocusedIcon,
  },
  {
    name: 'Oluştur',
    component: CreateStack,
    icon: CreateIcon,
    focusedIcon: CreateFocusIcon,
  },
  {
    name: 'Hesap',
    component: LoginStack,
    icon: UserIcon,
    focusedIcon: UserFocusedIcon,
  },
];
