import { ForgotPassword } from '@/pages/ForgotPassword';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { SendMailAddress } from '@/pages/SendMailAddress';

export const publicRoutes = [
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
  { path: 'forgotpassword', element: <ForgotPassword /> },
  { path: 'sendmail', element: <SendMailAddress /> },
];
