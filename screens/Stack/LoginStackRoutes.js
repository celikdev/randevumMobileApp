import {Register} from '..';
import ForgotPassword from '../ForgotPassword';
import MailVerification from '../MailVerification';
import UserInfo from '../UserInfo';

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
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    name: 'MailVerification',
    component: MailVerification,
  },
];
