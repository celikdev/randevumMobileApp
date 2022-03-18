import {Register} from '..';
import ForgotPassword from '../ForgotPassword';
import MailVerification from '../MailVerification';
import UserInfo from '../UserInfo';
import UserMeets from '../UserMeets';

export const loginStackRoutes = [
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'UserInfo',
    component: UserInfo,
  },
  {
    name: 'UserMeets',
    component: UserMeets,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    name: 'MailVerification',
    component: MailVerification,
  },
];
