import {
  CreateFocusIcon,
  CreateIcon,
  HomeFocusedIcon,
  HomeIcon,
  UserFocusedIcon,
  UserIcon,
} from './Icons';
import {Create, Home, Login} from './screens';
import Account from './screens/Account';
import {HomeStack} from './screens/Stack';

const token = false;

export const routes = [
  {
    name: 'Anasayfa',
    component: HomeStack,
    icon: HomeIcon,
    focusedIcon: HomeFocusedIcon,
  },
  {
    name: 'Oluştur',
    component: Create,
    icon: CreateIcon,
    focusedIcon: CreateFocusIcon,
  },
  {
    name: 'Hesap',
    component: token ? Account : Login,
    icon: UserIcon,
    focusedIcon: UserFocusedIcon,
  },
];
