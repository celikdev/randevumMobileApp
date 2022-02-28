import React from 'react';
import SyncStorage from 'sync-storage';

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

const token = false;

export const routes = [
  {
    name: 'Anasayfa',
    component: Home,
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
