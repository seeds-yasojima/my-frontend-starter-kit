import { useRoutes } from 'react-router-dom';

import { NotFound } from '@/pages/NotFound';
import { Top } from '@/pages/Top';

import { protectedRoutes } from './protected'; // 会員のみ閲覧可のルート
import { publicRoutes } from './public'; // 非会員でも閲覧可のルート

export const setRoutes = () => {
  // FIXME: ログインの有無で閲覧可能なルートを分岐させるパターン。
  // const auth = useAuth();
  // const routes = auth.user ? protectedRoutes : publicRoutes;

  const commonRoutes = [
    { index: true, element: <Top /> },
    { path: '*', element: <NotFound /> },
  ];

  const conbineRoutes = [...protectedRoutes, ...publicRoutes];

  const routes = [...commonRoutes, ...conbineRoutes];
  return routes;
};

export const AppRoutes = () => {
  const routes = setRoutes();
  const element = useRoutes(routes);

  return <>{element}</>;
};
