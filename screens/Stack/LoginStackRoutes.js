import {Register, AccountMeets} from '..';
import ForgotPassword from '../ForgotPassword';

export const loginStackRoutes = [
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    name: 'AccountMeets',
    component: AccountMeets,
  },
];
