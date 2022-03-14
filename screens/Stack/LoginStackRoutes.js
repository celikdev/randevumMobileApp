import {Register} from '..';
import ForgotPassword from '../ForgotPassword';
import MailVerification from '../MailVerification';

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
    name: 'MailVerification',
    component: MailVerification,
  },
];
